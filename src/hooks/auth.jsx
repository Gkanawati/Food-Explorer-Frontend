import { createContext, useContext, useEffect, useState } from 'react';
import { api } from './api';
import { useCart } from './cart';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const { clearCart } = useCart();
  // avoid to screen flickering when user is not logged in
  const [data, setData] = useState(
    {
      token: localStorage.getItem("@food_explorer:token"),
      user: JSON.parse(localStorage.getItem("@food_explorer:user"))
    }
  );
  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(localStorage.getItem("@food_explorer:user"))?.isAdmin || false
  );

  async function signIn({ email, password }) {
    if (!email || !password) {
      alert("Preencha todos os campos para realizar o login.");
      return;
    }

    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@food_explorer:user", JSON.stringify(user));
      localStorage.setItem("@food_explorer:token", token);

      // definindo token do usuario como header de todas as requisições
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });
      setIsAdmin(user.isAdmin);
    }
    catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Náo foi possível realizar o login.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@food_explorer:user");
    localStorage.removeItem("@food_explorer:token");
    setData({});
    setIsAdmin(false);
    clearCart();
  }

  async function updateProfile({ user, avatarFile }) {
    try {

      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@food_explorer:user", JSON.stringify(user));

      setData({ user, token: data.token });

      alert("Perfil atualizado com sucesso!");
    }
    catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Náo foi possível atualizar o perfil.")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@food_explorer:user");
    const token = localStorage.getItem("@food_explorer:token");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
      setIsAdmin(JSON.parse(user).isAdmin);
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateProfile,
      user: data.user,
      isAdmin,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export {
  AuthProvider,
  useAuth,
}
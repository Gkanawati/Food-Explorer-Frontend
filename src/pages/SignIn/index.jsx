import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { Container, ErrorHelperText, Form, FormContainer, Input, InputContainer, LogoContainer } from '../SignUp/styles';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  function handleSignIn(data) {
    signIn(data);
  }

  return (
    <Container>
      <LogoContainer>
        <img src="/src/assets/Logo-Food-Explorer.png" alt="Ícone Food Explorer" />
        <h1>food explorer</h1>
      </LogoContainer>

      <FormContainer>
        <Form onSubmit={handleSubmit(handleSignIn)}>
          <h2>Faça login</h2>

          <InputContainer>
            <label htmlFor='email'>Email</label>
            <Input
              type="email"
              {...register('email', { required: 'Campo obrigatório' })}
              placeholder='Exemplo: exemplo@exemplo.com.br'
            />
            {errors.email && <ErrorHelperText>{errors.email.message}</ErrorHelperText>}
          </InputContainer>

          <InputContainer>
            <label htmlFor='password'>Senha</label>
            <Input
              type="password"
              {...register('password', {
                required: 'Campo obrigatório',
                minLength: {
                  value: 6,
                  message: 'Senha deve ter no mínimo 6 caracteres'
                }
              })}
              placeholder='No mínimo 6 caracteres'
            />
            {errors.password && <ErrorHelperText>{errors.password.message}</ErrorHelperText>}
          </InputContainer>

          <Button text='Entrar' type='submit' />

          <Link to="/register">Criar conta</Link>
        </Form>
      </FormContainer>
    </Container>
  )
}
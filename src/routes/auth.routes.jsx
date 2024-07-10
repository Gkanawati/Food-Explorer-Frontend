import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' Component={SignIn} />
      <Route path='/register' Component={SignUp} />
      <Route path='*' Component={SignIn} />
    </Routes>
  )
}
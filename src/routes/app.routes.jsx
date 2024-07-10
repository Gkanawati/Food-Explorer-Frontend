import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { DishDetails } from '../pages/DishDetail';
import { Cart } from '../pages/Cart';
import { DishForm } from '../pages/DishForm';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='*' Component={Home} />
      <Route path='/dish/:id' Component={DishDetails} />
      <Route path='/cart' Component={Cart} />
      <Route path='/new-dish' Component={DishForm} />
      <Route path='/edit-dish/:id' Component={DishForm} />
    </Routes>
  )
}
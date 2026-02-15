import { createBrowserRouter } from 'react-router';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Layout } from './components/Layout';
import { Register } from './pages/Register';
import { RecipeList } from './pages/RecipeList';
import { RecipeDetail } from './pages/RecipeDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Landing },
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
      { path: 'recipes', Component: RecipeList },
      { path: 'recipes/:id', Component: RecipeDetail },
    ],
  },
]);

import ReactDOM from 'react-dom/client';
import { App } from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { ErrorPage } from './shared/components/ErrorPage';
import { Contato } from './shared/components/Contato';
import { Main } from './shared/components/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: 'contato',
        element: <Contato />
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <RouterProvider router={router} />
  </>
);

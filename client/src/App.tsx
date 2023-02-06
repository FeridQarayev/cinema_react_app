import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './routers/router';

const router = createBrowserRouter(ROUTES);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}
export default App;

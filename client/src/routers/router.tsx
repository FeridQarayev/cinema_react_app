import BaseRoot from '../pages/base/BaseRoot';
import Home from '../pages/base/home';

export const ROUTES = [
  {
    path: '/',
    element: <BaseRoot />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
  //   {
  //     path: '/admin/',
  //     element: <AdminRoot />,
  //     children: [
  //       {
  //         path: '',
  //         element: <Dashboard />,
  //       }
  //     ],
  //   },
];

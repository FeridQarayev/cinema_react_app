import BaseRoot from '../pages/base/BaseRoot';
import ComingSoon from '../pages/base/comingsoon';
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
      {
        path: 'comingsoon',
        element: <ComingSoon />,
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

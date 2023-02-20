import AboutUs from '../pages/base/aboutus';
import BaseRoot from '../pages/base/BaseRoot';
import ComingSoon from '../pages/base/comingsoon';
import Detail from '../pages/base/detail';
import Home from '../pages/base/home';
import Schedule from '../pages/base/schedule';
import Sign from '../pages/base/sign';

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
      {
        path: 'aboutus',
        element: <AboutUs />,
      },
      {
        path: 'detail',
        element: <Detail />,
      },
      {
        path: 'schedule',
        element: <Schedule />,
      },
      {
        path: 'sign',
        element: <Sign />,
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

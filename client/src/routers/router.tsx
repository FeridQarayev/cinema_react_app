import AdminRoot from '../pages/admin/AdminRoot';
import HomeAdmin from '../pages/admin/home';
import AboutUs from '../pages/base/aboutus';
import BaseRoot from '../pages/base/BaseRoot';
import ComingSoon from '../pages/base/comingsoon';
import Detail from '../pages/base/detail';
import Home from '../pages/base/home';
import Schedule from '../pages/base/schedule';
import SignIn from '../pages/base/signin';
import SignUp from '../pages/base/signup';

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
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
    ],
  },
  {
    path: '/admin/',
    element: <AdminRoot />,
    children: [
      {
        path: '',
        element: <HomeAdmin />,
      },
      {
        path: 'home',
        element: <HomeAdmin />,
      },
    ],
  },
];

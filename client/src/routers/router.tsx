import AdminRoot from '../pages/admin/AdminRoot';
import CinemaAdmin from '../pages/admin/cinema';
import HallAdmin from '../pages/admin/hall';
import HomeAdmin from '../pages/admin/home';
import MovieAdmin from '../pages/admin/movie';
import SessionAdmin from '../pages/admin/session';
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
        path: 'detail/:id',
        element: <Detail />,
      },
      {
        path: 'schedule',
        element: <Schedule />,
      },
      {
        path: 'schedule/:name',
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
      {
        path: 'cinema',
        element: <CinemaAdmin />,
      },
      {
        path: 'hall',
        element: <HallAdmin />,
      },
      {
        path: 'movie',
        element: <MovieAdmin />,
      },
      {
        path: 'session',
        element: <SessionAdmin />,
      },
    ],
  },
];

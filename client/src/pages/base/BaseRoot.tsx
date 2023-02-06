import { Outlet } from 'react-router-dom';
import Footer from '../../components/base/footer';
import Navbar from '../../components/base/navbar';

function BaseRoot(): JSX.Element {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default BaseRoot;

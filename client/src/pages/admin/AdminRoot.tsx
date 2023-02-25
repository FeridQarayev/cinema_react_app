import { Outlet } from 'react-router-dom';
import Navbar from '../../components/admin/navbar';

function AdminRoot(): JSX.Element {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default AdminRoot;

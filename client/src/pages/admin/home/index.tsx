import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyAdminWithToken } from '../../../services/verify.admin';
// import styled from './home.module.scss';

function Home(): JSX.Element {
  const navigate = useNavigate();
  useEffect(() => {
    void verifyAdminWithToken()
      .then((res) => {
        if (res.status !== 200) navigate('../../aboutus');
      })
      .catch(() => {
        navigate('../../aboutus');
      });
  }, []);
  return <div>Home</div>;
}

export default Home;

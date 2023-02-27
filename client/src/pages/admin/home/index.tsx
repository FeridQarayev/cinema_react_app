import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyAdmin } from '../../../services/verify.admin';
// import styled from './home.module.scss';

function Home(): JSX.Element {
  const user = JSON.parse(String(localStorage.getItem('user')));
  const navigate = useNavigate();
  useEffect(() => {
    if (user !== undefined && user !== null) {
      void verifyAdmin(user._id)
        .then((res) => {
          if (res.status !== 200) navigate('../../aboutus');
        })
        .catch(() => {
          navigate('../../aboutus');
        });
    }
  }, []);
  return <div>Home</div>;
}

export default Home;

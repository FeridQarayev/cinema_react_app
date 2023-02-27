import React, { useEffect } from 'react';
// import styled from './home.module.scss';

function Home(): JSX.Element {
  const storageUser = JSON.parse(String(localStorage.getItem('user')));
  useEffect(() => {
    console.log(storageUser);
  }, []);
  return <div>Home</div>;
}

export default Home;

import React, { useEffect, useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Login from './Login/Login';
// import Register from './Register/Register';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

import './App.css';

function App() {
  const [isPageLoading, setIsPageLoading] = useState(false);

  // useEffect(() => {
  //   setIsPageLoading(true);
  // }, []);

  return (
    <div className='page'>
      {isPageLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </div>
    // <div className='page'>
    //   <Header />
    //   <Main />
    //   <Footer />
    // </div>
  );
}

export default App;

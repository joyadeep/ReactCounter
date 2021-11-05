// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
// import AddIcon from '@mui/icons-material/Add';

const App=()=>
{
  return(
    <>
    <Header/>
    {/* <AddIcon/> */}
    <Body/>
   <Footer/>
    </>
  )
}

export default App;

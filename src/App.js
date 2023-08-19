import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Detail from './components/Detail';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import EmailDetail from './components/Email';
import About from './components/About';

function App() {
  // useEffect(()=>{
  //   const Scripts =[
  //     './static/js/jquery.sticky.js',
  //     './static/js/click-scroll.js',
  //     './static/js/custom.js',
  //     './static/js/jquery.min.js',
  //     './static/js/bootstrap.bundle.min.js'
  //   ]
  //   Scripts.forEach(url => {
  //     const script = document.createElement('script')
  //     script.src = url
  //     document.body.appendChild(script)
      
  //   });

  //   return () =>{
  //     Scripts.forEach(url => {
  //       const script = document.querySelector(`script[src="${url}"]`)
  //       if (script){
  //         document.body.removeChild(script)    
  //       }
        
  //     });
  //   }
  // },[])
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/email-details' exact element={<EmailDetail/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/verify/:id' exact element={<Detail />}/>
      </Routes>
    <Footer/>
    
    </BrowserRouter>
    
  );
}

export default App;

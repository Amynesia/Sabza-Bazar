import React from 'react';
import {Route} from 'react-router-dom'
import NavBar from'./NavBar';
import OfferSlider from'./OfferSlider';
import Login from'./Login';
import Register from'./Register';
import Footer from'./Footer';

function App() {
  return (
    <div style={{ fontFamily:"Dosis, sans-serif" }}>
      <NavBar/>
      <div className="container">
        <Route path="/register" component={Register} exact/>
        <Route path="/signup" component={Login} exact/>
        <Route path="/" component={OfferSlider} exact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

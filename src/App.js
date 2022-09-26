import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import ReFier from './Components/ReFier';
import Contact from './Components/Contact';
import MarketPlace from './Components/MarketPlace';
import Jobs from './Components/Jobs';
import LogIn from './Components/Pages/LogIn';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Jobs} />

        <Route exact path="/refier" component={ReFier} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/market" component={MarketPlace} />
        <Route exact path="/job" component={Jobs} />
        <Route exact path="/login" component={LogIn} />

      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

import axios from 'axios'
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Roster from './pages/Roster'
import Fixtures from './pages/Fixtures'
// import Login from './pages/Login'
// import Signup from './pages/Signup'

import {useEffect, useState} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Navbar />
      <Home />
      <Roster />
      <Fixtures />

    </div>
  );
}

export default App;

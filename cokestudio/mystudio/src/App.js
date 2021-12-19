import './App.css';
import React from 'react';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import User from './User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
      <User />
      </BrowserRouter>
    </div>
  );
}

export default App;

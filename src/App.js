// App.js
import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import Router from './router'

function App() {
  return (
    <div className="App">
      <Router />

    </div>
  );
}

export default App;

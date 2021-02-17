import react from 'react';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Navbar />
        <switch>
          <Route path='/' exact />
        </switch>
      </Router>
      </>
      
      

      
    </div>
  );
}

export default App;

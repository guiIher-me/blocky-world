import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import World from './pages/World';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={ <Home></Home> } />
          <Route path="/world" exact element={ <World></World> } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
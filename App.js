import React from 'react';
import { BrowserRouter as Router, Route,Routes, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import AvailableProducts from './components/AvailableProducts';
import UpcomingProducts from './components/UpcomingProducts';


const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand">E-commerce Store</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/products" className="nav-link">Products</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About></About>} />
          <Route exact path="/products" element={<Product/>} />
          <Route path="/available-products" element={<AvailableProducts/>} />
          <Route path="/upcoming-products" element={<UpcomingProducts/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

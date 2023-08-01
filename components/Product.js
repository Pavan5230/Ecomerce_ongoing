import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Realme 11pro max',
      category: 'Mobiles',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 49.99,
      imageUrl: 'https://image01.realme.net/general/20230705/16885310238596ce574a854b4450d838f5d7ffb6992d4.png?width=1440&height=1440&size=730480.webp',
    },
    {
      id: 2,
      name: 'Realme Pad 2',
      category: 'Tablets',
      description: 'Nunchxzgrgz sgrgs  ERwetwewerfsfczdsvsdv fefefsv f.',
      price: 29.99,
      imageUrl: 'https://image01.realme.net/general/20230719/1689757037680b8b2bc53d93d449c89d2470e6480a845.png?width=1440&height=1440&size=261938.webp',
    },
    {
        id: 3,
        name: 'Buds 2',
        category: 'Earphones',
        description: 'Nunc finibus massa eu arcu ultrices, ibendum.',
        price: 29.99,
        imageUrl: 'https://image01.realme.net/general/20220808/1659957911027.png.webp',
      },
      {
        id: 4,
        name: 'Realme Watch 3',
        category: 'Watches',
        description: 'Nunc finibus massa eu arcu ultrices, id fringilla purus bibendum.',
        price: 29.99,
        imageUrl: 'https://image01.realme.net/general/20220711/1657521680591.png.webp',
      },
      {
        id: 5,
        name: 'Timmer pro mmax',
        category: 'Trimmer',
        description: 'Nunc finibus massa eu arcu ultrices, id fringilla purus bibendum.',
        price: 29.99,
        imageUrl: 'https://image01.realme.net/general/20211102/1635833976955.png.webp',
      },
      {
        id: 6,
        name: 'Realme Smart Keyboard',
        category: 'Keyboard',
        description: 'Nunc finibus massa eu arcu ultrices, id fringilla purus bibendum.',
        price: 29.99,
        imageUrl: 'https://image01.realme.net/general/20220725/1658750486990.png.webp',
      },
    // Add more products with different categories
  ]);

  const [sortOption, setSortOption] = useState('default');

  // Function to handle sorting based on selected option
  const handleSort = (option) => {
    setSortOption(option);
    if (option === 'low-to-high') {
      setProducts([...products.sort((a, b) => a.price - b.price)]);
    } else if (option === 'high-to-low') {
      setProducts([...products.sort((a, b) => b.price - a.price)]);
    } else {
      // If the default option is selected, revert to the original order
      setProducts([...products]);
    }
  };

  return (
    
    <div className="container mt-4">
        <div className="container mt-4">
      <h1 className="display-4">Product Page</h1>
      <p>
        Welcome to our Product page. Here, you can find information about our products and browse through the available and upcoming products.
      </p>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/available-products" className="nav-link">Available Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/upcoming-products" className="nav-link">Upcoming Products</Link>
        </li>
      </ul>
    </div>
      <h1 className="display-4">Our Products</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          {/* Sorting Options */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sort By</h5>
              <select
                className="form-select"
                value={sortOption}
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>
          {/* Add more filter options if needed */}
        </div>
        <div className="col-md-8 mb-4">
          <div className="row">
            {products.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card">
                  <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.category}</p>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">Price: ${product.price}</p>
                    <Link to={`/product/${product.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          {/* You can implement pagination here to show limited products per page */}
        </div>
      </div>
    </div>
  );
};

export default Products;

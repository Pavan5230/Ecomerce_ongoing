import React, { useState } from 'react';

const AvailableProducts = () => {
  // Sample data for available products
  const [availableProducts, setAvailableProducts] = useState([
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
    // Add more available products
  ]);

  // Filter by category
  const [selectedCategory, setSelectedCategory] = useState('all');
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory === 'all'
    ? availableProducts
    : availableProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="container mt-4">
      <h1 className="display-4">Available Products</h1>
      {/* Filter by Category */}
      <div className="my-4">
        <label htmlFor="categorySelect" className="form-label">Filter by Category:</label>
        <select
          id="categorySelect"
          className="form-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">All</option>
          <option value="Mobiles">Mobiles</option>
          <option value="Tablets">Tablets</option>
          <option value="Earphones">Earphones</option>
          <option value="Watches">Watches</option>
          <option value="Trimmer">Trimmer</option>
          <option value="Keyboard">Keyboard</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Category: {product.category}</p>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">In Stock: {product.stock}</p>
                <button className="btn btn-primary">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableProducts;

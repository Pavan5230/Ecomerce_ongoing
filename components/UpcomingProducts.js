import React from 'react';

const UpcomingProducts = () => {
  return (
    <div className="container mt-4">
      <h1 className="display-4">Upcoming Products</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="product3.jpg" className="card-img-top" alt="Product 3" />
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-text">Description of Product 3.</p>
              <a href="#" className="btn btn-primary">Notify Me</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="product4.jpg" className="card-img-top" alt="Product 4" />
            <div className="card-body">
              <h5 className="card-title">Product 4</h5>
              <p className="card-text">Description of Product 4.</p>
              <a href="#" className="btn btn-primary">Notify Me</a>
            </div>
          </div>
        </div>
        {/* Add more product cards as needed */}
      </div>
    </div>
  );
};

export default UpcomingProducts;

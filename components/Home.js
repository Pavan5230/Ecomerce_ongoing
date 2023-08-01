import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Sample data for featured products
  const featuredProducts = [
    {
      id: 1,
      name: 'Realme 10 Pro+ 5g',
      imageUrl: 'https://image01.realme.net/general/20221125/1669370048817.png.webp',
      price: 59.99,
    },
    {
      id: 2,
      name: 'Realme c30',
      imageUrl: 'https://image01.realme.net/general/20220620/1655709759496.png.webp',
      price: 39.99,
    },
    {
      id: 3,
      name: 'Realme 11 Pro',
      imageUrl: 'https://image01.realme.net/general/20230608/1686196154532522f4298ed53477fa47835246a2306cd.png?width=1440&height=1440&size=706751.webp',
      price: 49.99,
    },
  ];

  return (
    <div>
      
        <div style={{width: '75rem',margin:'auto'}}>
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://image01.realme.net/general/20230719/168974735201215e939cba4d6496da5d556661dea799d.png.webp"  class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block" style={{color:'black'}}>
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://image01.realme.net/general/20230629/1688006322151c63533afb26c412f962723d7af0f18bb.jpg.webp"  class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{color:'black'}}>
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://image01.realme.net/general/20230719/1689747531320e57ff26ab1374c078910b5e347a52cf2.png.webp"  class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{color:'black'}}>
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
      {/* Featured Products */}
      <div className="container mt-4">
        <h2 className="mb-4">Featured Products</h2>
        <div className="row">
          {featuredProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card">
                <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promotional Banners */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-light">
              <img src="https://image01.realme.net/general/20230418/1681811978143.jpg.webp" className="card-img-top" alt="Promo 1" />
              <div className="card-body">
                <h5 className="card-title">Summer Sale</h5>
                <p className="card-text">Save up to 50% off on selected items.</p>
                <Link to="/products" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light">
              <img src="https://image01.realme.net/general/20230707/16887107357621d73f606012f4cc9a86881b796f7af83.jpg.webp" className="card-img-top" alt="Promo 2" />
              <div className="card-body">
                <h5 className="card-title">New Arrivals</h5>
                <p className="card-text">Discover the latest products just in.</p>
                <Link to="/products" className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light">
              <img src="https://image01.realme.net/general/20230801/1690872188523e584aff7818f40188896e3caf82d76f8.jpg.webp" className="card-img-top" alt="Promo 3" />
              <div className="card-body">
                <h5 className="card-title">Limited Time Offer</h5>
                <p className="card-text">Hurry! Grab the best deals now.</p>
                <Link to="/products" className="btn btn-primary">
                  View Deals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>
                Email: contact@example.com
              </p>
              <p>
                Phone: +1 (123) 456-7890
              </p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                {/* Add more important links as needed */}
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              {/* Add social media icons here */}
              <div className="social-icons">
                <a href="#" className="btn btn-outline-light"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="btn btn-outline-light"><i className="fab fa-twitter"></i></a>
                <a href="#" className="btn btn-outline-light"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

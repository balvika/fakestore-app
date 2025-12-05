import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RatingStars from './RatingStars';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Product not found');
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div className="product-detail">
      <button onClick={handleGoBack} className="back-button">
        ← Back
      </button>
      
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>
        
        <div className="product-detail-info">
          <h1>{product.title}</h1>
          
          <div className="product-rating">
            <RatingStars rating={product.rating.rate} />
            <span className="rating-count">
              {product.rating.count} reviews
            </span>
          </div>
          
          <div className="product-price">${product.price.toFixed(2)}</div>
          
          <div className="product-category">
            <strong>Category:</strong> {product.category}
          </div>
          
          <div className="product-description">
            <h3>Description:</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
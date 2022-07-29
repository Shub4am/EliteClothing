import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import './styles.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="categoryPreviewContainer">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;

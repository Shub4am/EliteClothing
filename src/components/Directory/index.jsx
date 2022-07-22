import React from 'react';
import CategoryItem from '../CategoryItem';
import './styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className="directoryContainer">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;

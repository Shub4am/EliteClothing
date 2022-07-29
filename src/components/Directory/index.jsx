import React from 'react';
import DirectoryItem from '../DirectoryItem';
import './styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className="directoryContainer">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;

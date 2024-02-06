import React, { useState } from 'react';
import EntityList from './EntityList'; 
import { useParams } from 'react-router-dom';

const Entities = ({ getCategoryData }) => {
  const { category } = useParams();
  const entities = getCategoryData(category) || [];

  return (
    <div>
      {entities.length > 0 ? (
        <EntityList entities={entities} category={category} />
      ) : (
        <p>No movies available.</p>
      )}
    </div>
  );
}

export default Entities;

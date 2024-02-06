import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/catalog/${category.name}`}>
              <div
                className="user-box"
                style={{ backgroundColor: category.bgColor }}
              >
                {category.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;

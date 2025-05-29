import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import categoryMap from '../data/CategoryMap';
import '../styles/Category.css';

const Category = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const basePath = useMemo(() => {
    const path = location.pathname; // 현재 경로

    if (categoryMap[path]) return path;

    const matchingKey = Object.keys(categoryMap).find((key) => path.startsWith(key));
  
    return matchingKey || '/';
  },[location.pathname]);

  const categories = useMemo(() => categoryMap[basePath] || [], [basePath]);

  return (
    <div className="category-container">
      <h2 className="category-title">🔥 everyThing 🔥</h2>
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category.id}
            className={`category-item ${location.pathname === category.path ? 'active' : ''}`}
            onClick={() => navigate(category.path)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

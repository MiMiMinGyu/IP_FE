import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Category.css';

const Category = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const categories = useMemo(() => [
    { id: 1, name: '메인 페이지', path: '/' },
    { id: 2, name: '학과 소개', path: '/boards/intro' },
  ], []);

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

import { useNavigate } from 'react-router-dom';
import cardList from '../data/CardList';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-grid">
      {cardList.map((card) => (
        <div
          className="home-card"
          key={card.path}
          onClick={() => navigate(`/${card.path}`)}
        >
          <img src={card.image} alt={card.title} className="home-card-image" />
          <h3 className="home-card-title">{card.title}</h3>
          <p className="home-card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

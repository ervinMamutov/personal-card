import './PersonasCards.css';
import PropTypes from 'prop-types';
import SingleCard from './SingleCard';

const PersonasCards = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((userInfo, index) => (
        <SingleCard key={index} userInfo={userInfo} />
      ))}
    </div>
  );
};
PersonasCards.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PersonasCards;

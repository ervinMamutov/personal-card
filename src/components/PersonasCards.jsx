import './PersonasCards.css';
import PropTypes from 'prop-types';
import PersonasInfo from './PersonasInfo';
import data from '../data/data';

const PersonasCards = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((userInfo, index) => (
        <PersonasInfo key={index} userInfo={userInfo} />
      ))}
    </div>
  );
};
PersonasCards.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PersonasCards;

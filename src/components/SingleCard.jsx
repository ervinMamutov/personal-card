import './SingleCard.css';
import PropTypes from 'prop-types';

const SingleCard = ({ userInfo }) => {
  const address = userInfo.address;

  return (
    <div className="card">
      <div className="card__side card__side_front">
        <div className="flex__1">
          <p className="card__side__company">{userInfo.company.name}</p>
          <p className="card__side__name-person">{userInfo.name}</p>
        </div>
      </div>
      <div className="card__side card__side_back">
        <div className="card__side__black">
          <p className="card__side-number">{`phone: ${userInfo.phone}`}</p>
        </div>
        <p className="card__side__number">{`zip: ${address.zipcode} city: ${address.city}`}</p>
        <div className="flex__2">
          <p className="card__side__other-numbers card__side__other-numbers_1">
            {address.street}
          </p>
          <p className="card__side__other-numbers card__side__other-numbers_2">
            {address.suite}
          </p>
        </div>
        <p className="card__side__other-info">
          <a href={`mailto:${userInfo.email}`} className="email">
            email:{userInfo.email}
          </a>
        </p>
      </div>
    </div>
  );
};

SingleCard.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

export default SingleCard;

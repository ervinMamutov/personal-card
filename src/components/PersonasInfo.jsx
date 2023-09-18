import './PersonasInfo.css';
import PropTypes from 'prop-types';

const PersonasInfo = ({ userInfo }) => {
  const address = userInfo.address;
  return (
    <div className="user-info">
      <div className="user-title">
        <div className="user-title-text">USER PERSONA</div>
        <div className="user-title-name">{userInfo.name}</div>
      </div>
      <div className="username">{userInfo.username}</div>
      <div className="email">
        <a href={`mailto:${userInfo.email}`} className="email">
          {userInfo.email}
        </a>
      </div>
      <div className="address">
        <ul className="address">
          <li>
            <span>street: </span>
            {address.street}
          </li>
          <li>
            <span>suite: </span>
            {address.suite}
          </li>
          <li>
            <span>city: </span>
            {address.city}
          </li>
          <li>
            <span>zipcode: </span>
            {address.zipcode}
          </li>
          <li>
            <span>phone: </span>
            {userInfo.phone}
          </li>
        </ul>
      </div>
    </div>
  );
};

PersonasInfo.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

export default PersonasInfo;

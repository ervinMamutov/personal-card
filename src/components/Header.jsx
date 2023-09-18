import './Header.css';
import PropTypes from 'prop-types';

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="title">
          <h1 className="title-text">Personas Cards</h1>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;

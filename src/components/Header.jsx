import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header__wrapper">
        <span role="img" aria-label="factory" className="header__emoji">
        🏭
        </span>
        <h1 className="header__title">
          June Shop
          <div className="header__subtitle">Shop with confidence</div>
        </h1>
      </div>
    );
  }
}

export default Header;

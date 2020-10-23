import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './index.scss';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

const Header = () => {
  const [{ cart }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1fedpb39ar122rmpto4bdrcc-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2Fwhite-amazon-logo-png-150px.png&f=1&nofb=1" alt="Amazon" className="header-logo" />
      </Link>
      <div className="header-search">
        <input type="text" className="header-search-input" />
        <SearchIcon className="header-search-icon" />
      </div>
      <nav className="header-nav">
        <Link to="/login">
          <div className="header-nav-option">
            <span className="header-nav-option-line-one">Hello, Guest</span>
            <span className="header-nav-option-line-two">Sign In</span>
          </div>
        </Link>
        <div className="header-nav-option">
          <span className="header-nav-option-line-one">Returns</span>
          <span className="header-nav-option-line-two">& Orders</span>
        </div>
        <div className="header-nav-option">
          <span className="header-nav-option-line-one">Your</span>
          <span className="header-nav-option-line-two">Prime</span>
        </div>
        <Link to="/cart">
          <div className="header-nav-option-cart">
            <ShoppingCartIcon className="header-nav-option-cart-icon" />
            <span className="header-nav-option-line-two header-cart-count">{cart?.length}</span>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Header;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { StateContext } from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }] = useContext(StateContext);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <IconButton>
          <SearchIcon className="header__searchIcon" />
        </IconButton>
      </div>
      <Link to={!user && "/login"} className="header__link">
        <div onClick={login} className="header__option">
          <span className="header__optionLineOne">Hello{user?.email},</span>
          <span className="header__optionLineTwo">
            {user ? "Sign out" : "Sign In"}
          </span>
        </div>
      </Link>
      <Link to="/" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link>
      <Link to="/" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </Link>
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          <ShoppingCartOutlinedIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;

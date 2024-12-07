import react from "react";
import './Header.css';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from"react-router-dom";
export default function Header(){
    return(
        <div className="navbar">
        {/* Logo Section */}
        <div className="navbar_logo">
          <StorefrontIcon className="navbar_logoIcon" fontSize="large" />
          <h2 className="navbar_logoTitle">Shop</h2>
        </div>
  
        {/* Search Section */}
        <div className="navbar_search">
          <input type="text" className="navbar_searchInput" placeholder="Search products..." />
          <SearchIcon className="navbar_searchIcon" />
        </div>
  
        {/* Navigation Section */}
        <div className="navbar_nav">
          <div className="nav_item">
            <span className="nav_itemLineOne">Hey Guest</span>
            <span className="nav_itemLineTwo">Sign in</span>
          </div>
          <div className="nav_item">
            <span className="nav_itemLineOne">Your</span>
            <span className="nav_itemLineTwo">Shop</span>
          </div>
          <Link to="/checkout" style={{textDecoration:"none"}}>
          <div className="nav_item basket">
            <ShoppingBasketIcon fontSize="large" />
            <span className="nav_itemLineTwo nav_basketCount">0</span>
          </div>
          </Link>
        </div>
      </div>
    )
}
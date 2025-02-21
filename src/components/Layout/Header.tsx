import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <NavLink to="/">AdityaReactQuery</NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/trad">FetchOld</NavLink>
          </li>
          <li>
            <NavLink to="/rq"> FetchRQ </NavLink>
          </li>
          <li>
            <NavLink to="/infinite"> InfiniteScroll </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

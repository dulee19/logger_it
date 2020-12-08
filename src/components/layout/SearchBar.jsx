import React from "react";

const SearchBar = () => {
  return (
    <nav style={navStyle} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" required />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

const navStyle = {
  marginBottom: "30px"
};

export default SearchBar;

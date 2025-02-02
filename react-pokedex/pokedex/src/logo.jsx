import React from "react";
import { PropTypes } from "prop-types";

function Logo(props) {
  return (
    <header>
      <h1>Welcome to the {props.AppName} Pokemon </h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt=""
      />
    </header>
  );
}

Logo.propTypes = {
  AppName: PropTypes.string.isRequired,
};

export default Logo;

import React from "react";
import { PropTypes } from "prop-types";

function CaughtPokemon(props) {
  return <p>Caught 0 Pokemon on {props.date}</p>;
}

CaughtPokemon.propTypes = {
  date: PropTypes.string.isRequired,
};
export default CaughtPokemon;

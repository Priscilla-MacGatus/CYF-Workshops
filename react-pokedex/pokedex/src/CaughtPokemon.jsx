import { useState } from "react";
import React from "react";
import { PropTypes } from "prop-types";

function CaughtPokemon(props) {
  const [caught, setCaught] = useState([]);

  const catchPokemon = () => {
    setCaught((prevPokemons) => [...prevPokemons, "Mimi"]);
  };

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <ul>
        {caught.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={catchPokemon}>Catch</button>
    </div>
  );
}

CaughtPokemon.propTypes = {
  date: PropTypes.string.isRequired,
};
export default CaughtPokemon;
//caught.map((item, index) => <li key={index}>{item}</li>)

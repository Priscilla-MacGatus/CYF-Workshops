import React from "react";
import Logo from "./logo.jsx";
import BestPokemon from "./bestPokemon.jsx";
import CaughtPokemon from "./CaughtPokemon.jsx";

function App() {
  const logWhenClicked = () => {
    console.log("Yayyyy!! Its Pokedex here");
  };

  return (
    <div>
      <Logo AppName="Priscilla's" handleClick={logWhenClicked}></Logo>

      <BestPokemon
        abilities={["Anticipation", "Adaptability", "Run-Away"]}
      ></BestPokemon>
      <CaughtPokemon date={new Date().toLocaleDateString()}></CaughtPokemon>
    </div>
  );
}

export default App;

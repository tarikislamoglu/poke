import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonDetails from "./components/PokemonDetails";
import { FaSearch } from "react-icons/fa";
const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonInfo1, setPokemonInfo1] = useState(null);
  const [pokemonInfo2, setPokemonInfo2] = useState(null);
  const [pokeChoice, setPokeChoice] = useState(null);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const fetchPokeDatas = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
        );
        setPokemons(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPokeDatas();
  }, []);

  const fetchInfoDatas = async (url) => {
    try {
      const response = await axios.get(url);
      if (pokemonInfo1 === null) {
        setPokemonInfo1(response.data);
      } else if (pokeChoice === "poke2") {
        setPokemonInfo2(response.data);
      } else if (pokeChoice === "poke1") {
        setPokemonInfo1(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleChoiceClick = (name) => {
    filteredPokemons.map((pokemon) => {
      if (pokemon.name === name) {
        fetchInfoDatas(pokemon.url);
      }
    });
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-baseline ">
        <FaSearch className="text-white mr-2 " />
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-amber-100 mt-5 rounded-md p-1 border-2 border-white  placeholder-amber-500 "
          placeholder="Search Pokemon"
        />
      </div>
      <div className="flex flex-wrap py-5 items-center justify-center">
        {filteredPokemons.map((pokemon) => {
          return (
            <button
              key={pokemon.name}
              className="border-1 bg-amber-500 text-white border-white p-4 m-2 rounded-md cursor-pointer"
              onClick={() => handleChoiceClick(pokemon.name)}
            >
              {pokemon.name}
            </button>
          );
        })}
      </div>
      <div className=" flex p-10 flex-col md:flex-row ">
        <div
          onClick={() => setPokeChoice("poke1")}
          className={`bg-blue-500 cursor-pointer flex flex-col items-center w-full md:mr-4 rounded-md mr-0 mb-4 md:mb-0 ${
            pokeChoice === "poke1" && "border-3 border-white"
          }`}
        >
          <h1 className="text-white pt-4">Pokemon 1</h1>
          {pokemonInfo1 ? (
            <PokemonDetails
              pokemonInfo={pokemonInfo1}
              setPokemonInfo={setPokemonInfo1}
            />
          ) : (
            <p className="text-amber-500 bg-amber-100 p-4 m-4 rounded-md">
              Detaylı bilgi için pokemon seçiniz
            </p>
          )}
        </div>
        <div
          onClick={() => setPokeChoice("poke2")}
          className={`bg-blue-500 cursor-pointer flex flex-col items-center w-full rounded-md ${
            pokeChoice === "poke2" && "border-3 border-white"
          }`}
        >
          <h1 className="text-white pt-4">Pokemon 2</h1>
          {pokemonInfo2 ? (
            <PokemonDetails
              pokemonInfo={pokemonInfo2}
              setPokemonInfo={setPokemonInfo2}
            />
          ) : (
            <p className="text-amber-500 bg-amber-100 p-4 m-4 rounded-md">
              Detaylı bilgi için pokemon seçiniz
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

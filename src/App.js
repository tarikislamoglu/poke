import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonDetails from "./components/PokemonDetails";
import { FaSearch } from "react-icons/fa";
const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState(null);
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
      setPokemonInfo(response.data);
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
      <div className="flex flex-col items-center w-full pt-5">
        {pokemonInfo ? (
          <PokemonDetails
            pokemonInfo={pokemonInfo}
            setPokemonInfo={setPokemonInfo}
          />
        ) : (
          <p className="text-amber-500 bg-amber-100 p-5 rounded-md">
            Detaylı bilgi için pokemon seçiniz
          </p>
        )}
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
    </div>
  );
};

export default App;

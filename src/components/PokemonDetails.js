import React from "react";

const PokemonDetails = ({ pokemonInfo }) => {
  const { abilities, height, sprites, stats, weight, types, name } =
    pokemonInfo;
  const pokeName = `${name[0].toUpperCase() + name.slice(1)}`;
  return (
    <div className="flex flex-col items-center p-10 bg-blue-500 text-white ">
      <div className=" bg-blue-400 p-5 rounded-md mb-4 w-full justify-center items-center flex">
        <h2 className="font-bold border-b-white border-b-1">{pokeName}</h2>
      </div>
      <div className="flex flex-2/5 ">
        <div className="flex  h-[250px] flex-1/2 flex-col justify-center items-center  bg-blue-400 p-5 rounded-md mr-4">
          <img src={sprites.front_default} width={200} height={150} />
        </div>
        <div className="flex h-[250px] flex-1/2 flex-col bg-blue-400 p-5 rounded-md justify-center items-center ">
          <h4 className="text-center mb-4  border-b-white border-b-1">
            Phsical Informations
          </h4>
          <div>
            <p className="text-center ">
              Height:{((height * 30.48) / 100).toFixed(2)}m
            </p>
            <p className="text-center">Weight:{(weight / 10).toFixed(2)}kg</p>
          </div>
        </div>
      </div>
      <div className="flex m-3 flex-1/5 w-full">
        <div className="flex h-[150px] w-full flex-1/2 flex-col justify-center items-center bg-blue-400 p-5 rounded-md mr-4">
          <h4 className="text-center mb-4  border-b-white border-b-1">
            {" "}
            Abilities
          </h4>
          <div>
            {abilities.map(({ ability, id = crypto.randomUUID() }) => {
              return (
                <p className="text-center" key={id}>
                  {ability.name}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex h-[150px] w-full flex-1/2 flex-col justify-center items-center bg-blue-400 p-5 rounded-md ">
          <h4 className="text-center mb-4  border-b-white border-b-1">Types</h4>
          <div className="flex flex-col">
            {types.map(({ type, id = crypto.randomUUID() }) => {
              return (
                <p className="text-center" key={id}>
                  {type.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-3/5 w-full ">
        <div className="h-[250px] flex-col justify-center items-center bg-blue-400 p-5 rounded-md w-full ">
          <h4 className="text-center mb-4 border-b-white border-b-1">Stats</h4>
          <div className="flex flex-col">
            {stats.map(({ stat, base_stat }) => {
              return (
                <p className="text-center">
                  {stat.name}:{base_stat}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;

import React from "react";

const PokemonDetails = ({ pokemonInfo, setPokemonInfo }) => {
  const { abilities, height, sprites, stats, weight, types, name } =
    pokemonInfo;
  const pokeName = `${name[0].toUpperCase() + name.slice(1)}`;

  const bigBoxSClass = "mx-4 rounded-md grid grid-cols-1 sm:grid-cols-2 ";
  const bigBoxLClass = " mx-4 rounded-md grid grid-cols-1";
  const smallBoxClass =
    " bg-blue-400  p-5 rounded-md sm:mx-2 mb-4 flex flex-col justify-center items-center border-white border-1 ";
  const hClass = "font-bold border-b-white border-b-1 text-center mb-2";
  return (
    <div className="container mx-auto p-5 bg-blue-500 text-white rounded-md relative">
      <button
        className="p-5 text-white absolute top-2 right-8 cursor-pointer"
        onClick={() => setPokemonInfo(null)}
      >
        X
      </button>
      <div className={bigBoxLClass}>
        <div className={smallBoxClass}>
          <h2 className={hClass}>{pokeName}</h2>
        </div>
      </div>
      <div className={bigBoxSClass}>
        <div className={`${smallBoxClass} p-2`}>
          <img
            src={sprites.front_default}
            className=" min-w-[200px] min-h-[200px]"
          />
        </div>
        <div className={smallBoxClass}>
          <h4 className={hClass}>Phsical Informations</h4>
          <div>
            <p className="text-center ">
              Height:{((height * 30.48) / 100).toFixed(2)}m
            </p>
            <p className="text-center">Weight:{(weight / 10).toFixed(2)}kg</p>
          </div>
        </div>
      </div>
      <div className={bigBoxSClass}>
        <div className={smallBoxClass}>
          <h4 className={hClass}> Abilities</h4>
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
        <div className={smallBoxClass}>
          <h4 className={hClass}>Types</h4>
          <div>
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
      <div className={bigBoxLClass}>
        <div className={smallBoxClass}>
          <h4 className={hClass}>Stats</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map(({ stat, base_stat, id = crypto.randomUUID() }) => {
              return (
                <div className="flex flex-col justify-baseline sm:justify-end">
                  <p key={id} className="text-center">
                    {stat.name}:{base_stat}
                  </p>
                  <input
                    type="range"
                    value={base_stat}
                    className=" pointer-events-none "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;

import React from "react";
import "./pokedex.css";
import Pokemon from "../pokemon/Pokemon";
import Pagination from "../pagination/Pagination";

const Pokedex = (props) => {
  const { pokemons, loading, page, totalPages, setPage } = props;
  const onLeftClickHandler = () => {
    if(page > 0) {
      setPage(page-1)
    }
  }
  const onRightClickHandler =() => {
    if(page+1 !== totalPages){
      setPage(page+1)
    }
  }

  return (
    <div>
      <div className="pokedex-header">
        <Pagination
          page={page+1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div>Carregando, segura ai fera... </div>
      ) : (
        <div className="pokedex-grid">
          {pokemons && pokemons.map((pokemon, index) => {
            return (
              <Pokemon pokemon={pokemon} key={index}/>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;

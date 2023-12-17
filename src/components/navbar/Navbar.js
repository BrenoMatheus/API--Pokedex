import React, { useContext } from "react";
import logo from "../../img/pokeapi.png"
import FavoriteContext from "../../contexts/favoritesContext";
import { FaHeart } from "react-icons/fa6";


const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext)
  return (
    <nav>
      <div>
        <img
            alt="pokeapi-logo"
            src={logo}
            className="navbar-img"
        />
      </div>
      <div>
        {favoritePokemons.length} <FaHeart/>
      </div>
    </nav>
  );
};

export default Navbar;


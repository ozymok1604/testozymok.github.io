import React, { useContext } from "react";
import styles from "./styles.css";
import SearchIMG from "../../svg/search.svg";
import { UsersContext } from "../../context";

const Search = () => {
  const { handleFilterChange } = useContext(UsersContext);
  return (
    <div className="search-base">
      <img className="img" src={SearchIMG}></img>
      <input onChange={(e) => handleFilterChange(e)} className="input" />
    </div>
  );
};

export { Search };

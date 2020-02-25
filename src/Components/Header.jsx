import React from "react";
import Styles from "./Styles.css";
import Filter from "./Filter";
import FilterName from "./FilterName";

const Header = props => {
  const characters = props.characters;
  const statusOnClick = props.statusOnClick;
  const nameFilter = props.nameFilter;
  const changeCaracters = props.changeCaracters;
  const numberCharacters = props.numberCharacters;
  return (
    <div className="Filtros">
      <FilterName nameFilter={nameFilter} />
      <Filter statusOnClick={statusOnClick} />
      <div>Se han encontrado {numberCharacters} resultadosn</div>
    </div>
  );
};
export default Header;
//en el body hay dos opciones. Que te muestre una cosa cuando este seleccionado
//y otro no.
//Tener un estado que sea maximizar caracter.

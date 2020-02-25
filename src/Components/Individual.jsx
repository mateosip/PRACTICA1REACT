import React from "react";
import Styles from "./Styles.css";

const Individual = props => {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    location,
    image
  } = props.character;
  const returnOriginal = props.returnOriginal;
  return (
    <div className="Individual">
      <div className="Aspa" onClick={returnOriginal}>
        Volver
      </div>

      <div className="Image">
        <img src={image} alt={name} />
        <div className="InfoImage">
          <h1>{name}</h1>
          <span>id: {id}</span>
        </div>
      </div>

      <div className="FilaCharacter">
        <span>Status: </span>
        <p>{status}</p>
      </div>
      <div className="FilaCharacter">
        <span>Species:</span>
        <p>{species}</p>
      </div>
      <div className="FilaCharacter">
        <span>Gender: </span>
        <p>{gender}</p>
      </div>
      <div className="FilaCharacter">
        <span>Origin:</span>
        <p>{origin.name}</p>
      </div>
      <div className="FilaCharacter">
        <span>Location:</span>
        <p>{location.name}</p>
      </div>
    </div>
  );
};
export default Individual;

import React from 'react';
import Styles from './Styles.css';


const Character = (props) => {
    //const charactersFiltered = props.character
    const {id,name,status,species,gender,origin,location,image} = props.character;
    const changeVistaMaximizada = props.changeVistaMaximizada;
    return(
        <div className = "Character" onClick = {()=>changeVistaMaximizada(id)} >
            <div className = "Image">
                <img className="foto" src={image} alt={name}/>
                <div className = "InfoImage">
                    <h1>{name}</h1>
                    <span>id: {id}</span>
                </div>
            </div>
            <div className = "FilaCharacter">
                <span className = "Span">Status: </span>
                <p className = "p">{status}</p>
            </div>
            <div className = "FilaCharacter">
                <span className = "Span">Species:</span> 
                <p className = "p">{species}</p>
            </div>
            <div className="FilaCharacter">
                <span className = "Span">Gender: </span>
                <p className = "p">{gender}</p>
            </div>
            <div className = "FilaCharacter">
                <span className = "Span">Origin:</span>
                <p className = "p">{origin.name}</p>
            </div>
            <div className = "FilaCharacter">
                <span className = "Span" >Location:</span>
                <p className = "p">{location.name}</p>
            </div>

        </div>
    );
}
export default Character;
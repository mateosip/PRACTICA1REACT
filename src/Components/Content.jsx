import React from 'react';
import Styles from './Styles.css';
import Character from './Character';
import Individual from './Individual';

const Content = (props) =>{
    const {characters,statusFilter,statusOnClick,numberCharacters,filterName,vistaMaximizada,returnOriginal,changeVistaMaximizada} = props;
    const charactersFiltered = statusFilter === 0 ?
        characters:
        characters.filter(char=>{
            if(statusFilter===1)return char.status === "Alive";
            else if(statusFilter===2)return char.status === "Dead";
            else if(statusFilter===3)return char.status === "unknown";
            else return true;
            
        })
    const charactersFilteredAfter = filterName === ""?
        charactersFiltered:
        charactersFiltered.filter(char=>char.name.toLowerCase().includes(filterName.toLowerCase()))
        let longitud = charactersFiltered.length;
        const found = charactersFilteredAfter.find(el=>el.id===vistaMaximizada);
        console.log(vistaMaximizada);
        return(
        <div className="Content">
            {vistaMaximizada === 0?
                charactersFilteredAfter.map(char => (
                    
                    <Character
                        key={char.id}
                        character={char}
                        statusOnClick={statusOnClick}
                        changeVistaMaximizada={changeVistaMaximizada}
                    />
                ))
            :
                <Individual
                    character={found}
                    returnOriginal={returnOriginal}
                />
            }
           
        </div>
    )
        }
export default Content;
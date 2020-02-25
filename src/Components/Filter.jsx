import React from 'react';
import Styles from './Styles.css';
const Filter = (props) => {
    const {status,statusOnClick} = props;

    
    return(
        <select className="Filter" id="status">
            <option value="Alive" className="button" onClick={()=>statusOnClick(1)}>Alive</option> 
            
            <option value="Dead" className="button" onClick={()=>statusOnClick(2)}>Dead</option>
                
            
            <option value="unknown" className="button" onClick={()=>statusOnClick(3)}>Unknown</option>
                
            
            <option value="All" className="button" onClick={()=>statusOnClick(0)}>All</option>

        </select>
    )
}
export default Filter;
//al pinchar en un personaje sale en pantalla completa
//si hago click en el aspa vuelve a la lista
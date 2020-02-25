import React from 'react';
import Styles from './Styles.css';
const FilterName = (props) => {
    const nameFilter = props.nameFilter;
    
    return(
        <div className="FilterName">
            <input type="text" onChange={(event)=>nameFilter(event.target.value)}></input>

        </div>
    )
}
export default FilterName;
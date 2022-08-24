import React from 'react';

function Location({changeLocation, location}) {

    return (
        <div className= 'location' >
            <h2 id= 'currentLoc'>{location}</h2>
            <input 
                id= 'locSelector'
                type= 'text' 
                placeholder='country or city'
            />
            <button
                id= 'locButton'
                onClick= {()=> changeLocation(document.querySelector('#locSelector').value)}
            >Select
            </button>
        </div>
    );
};

export default Location;
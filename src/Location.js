import {useRef} from 'react';

function Location({changeLocation, location}) {

    const locationRef= useRef(null);

    return (
        <div className= 'location' >
            <h2 id= 'currentLoc'>{location}</h2>
            <input
                autoFocus
                id= 'locSelector'
                type= 'text' 
                placeholder='country or city'
                ref= {locationRef}
            />
            <button
                id= 'locButton'
                onClick= {()=> {
                    changeLocation(locationRef.current.value);
                    locationRef.current.value= '';
                }}
            >
                Select
            </button>
        </div>
    );
};

export default Location;
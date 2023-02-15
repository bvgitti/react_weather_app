import React from 'react';

function Today({today}) {

    //filtering out passed hours from hourly forecasts db
    const currentTime= new Date().getHours();
    const todayTempsArray= today.hours.filter(
        temps=> parseInt(temps.datetime.slice(0,2)) > currentTime
    );
    //creating hourly list of forecasts
    const todayTempList= todayTempsArray.map((data, index)=> (
        <div className= 'todayItem' key= {index}>
            <p id= 'todayTime'>
                {data.datetime.slice(0,-3)}
            </p>
            <h2 id= 'todayTemp'>
                {data.temp} &#8451;
            </h2>
        </div>
    ));

    return (
        <div className= 'today'>
            <p id= 'todayDate'> {today.datetime}</p>
            <p id= 'todayDescr'>{today.description}</p>
            <div className= 'todayList'>
                {todayTempList}
            </div>
            <div className= 'sun'>
                <p id= 'sunrise'>Sunrise: {today.sunrise.slice(0,-3)}</p>
                <p id= 'sunset'>Sunset: {today.sunset.slice(0,-3)}</p>
            </div>
        </div>
    );
};

export default Today;
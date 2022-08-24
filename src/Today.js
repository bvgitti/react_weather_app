import React from 'react';

function Today({today}) {

    //const currentTime= new Date().getHours();             //default init
    const currentTime= 1;           // << to get actual weather informations delete this
     //filtering out passed hours from hourly forecasts db
    const todayTempsArray= today.hours.filter(
        temps=> parseInt(temps.datetime.slice(0,2)) > currentTime
    );
    //creating hourly forecasts list
    const todayTempList= todayTempsArray.map((data, index)=> (
        <div className= 'todayItem' key= {index}>
            <p id= 'todayTime'>{data.datetime}</p>
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
                <p id= 'sunrise'>Sunrise: {today.sunrise}</p>
                <p id= 'sunset'>Sunset: {today.sunset}</p>
            </div>
        </div>
    );
};

export default Today;
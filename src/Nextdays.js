import React from 'react';

function NextDays({nextDaysData}) {

    //filtering out today datas from forecast db
    const date= new Date();   //default
    date.setFullYear(2022);     // <<to get actual
    date.setMonth(8-1);         // <<weather informations
    date.setDate(24);           // <<delete these !!!
    const todayMonth= (date.getMonth() +1) < 10 ? `0${date.getMonth() +1}` : `${date.getMonth() +1}`;
    const todayDate= date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    const today= `${date.getFullYear()}-${todayMonth}-${todayDate}`;
    const forecast= nextDaysData.filter(data=> (data.datetime !== today));

    //creating daily forecasts list from db
    const forecastList= forecast.map((dayData, index)=> (
        <div className= 'forecastItem' key= {index}>
            <p className= 'forecastData'>{dayData.datetime}</p>
            <h3 id= 'forecastTemp'>{dayData.feelslike} &#8451;</h3>
            <p className= 'forecastData'>max: {dayData.feelslikemax} &#8451;</p>
            <p className= 'forecastData'>min: {dayData.feelslikemin} &#8451;</p>
        </div>
    ));

    return (
        <div className= 'forecast'>
          {forecastList}
        </div>
    );
};

export default NextDays;
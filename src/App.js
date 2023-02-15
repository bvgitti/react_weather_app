import React from 'react';
import { useState, useReducer, useEffect } from 'react';
import WHeader from './Wheader';
import WFooter from './Wfooter';
import Location from './Location';
import Today from './Today';
import NextDays from './Nextdays';
import WeatherLocalDb from './Budapest.json'

function App() {

  const [state, dispatch]= useReducer((state, action)=> {
    switch(action.type) {
      case 'SET_API_KEY':
        return {...state, api_key: action.payload};
      case 'SET_LOCATION':
        return {...state, location: action.payload};
      case 'SET_ISLOADING':
        return {...state, isLoading: action.payload};
      case 'SET_ERROR':
        return {...state, errorMsg: action.payload};
      default:
        return {...state, errorMsg: 'invalid action-type'};
    }
  }, {
    api_key: null,
    location: null,
    isLoading: true,
    errorMsg: null,
  });

  const [weatherData, setWeatherData]= useState(null);

  const API_URL= 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

  useEffect(()=> {
    let key= prompt(
      `Információ:
      Ingyenes API kulcs-> https://www.visualcrossing.com
      A -mégse- gombra kattintva az oldal mentett adatokat jelenít meg`, 'API KEY'
    );
    if(key) {
      dispatch({type: 'SET_API_KEY', payload: key});
      dispatch({type: 'SET_LOCATION', payload: 'Budapest'});
      return;
    }
    setWeatherData(WeatherLocalDb);
    dispatch({type: 'SET_ISLOADING', payload: false});
  }, []);


  useEffect(()=> {
    const fetchController= new AbortController();

    const fetchData= async ()=> {
      try {
        const response= await fetch(
          `${API_URL}/${state.location}?unitGroup=metric&key=${state.api_key}&contentType=json`,
          {signal: fetchController.signal}
        );
        if(!response.ok) throw Error(`something went wrong :(`);
        const updatedWeatherData= await response.json();
        setWeatherData(updatedWeatherData);
        dispatch({type: 'SET_ERROR', payload: null});
      } catch(error) {
          dispatch({type: 'SET_ERROR', payload: error.message});
      } finally {
          dispatch({type: 'SET_ISLOADING', payload: false});
      };
    };

    state.api_key && fetchData(); //if no API key added, this blocks the first run of fetching (useEffect)

    return (
      ()=> fetchController.abort()
    );
  }, [state.location]);
 
  const changeLocation= (newLocation)=> {
    if(newLocation && (newLocation !== state.location)) {
      dispatch({type: 'SET_LOCATION', payload: newLocation});
    }
  };

  const currentLocation= weatherData ? weatherData.resolvedAddress.split(',')[0] : state.location;
  
  return (
    <div className="App">
      <WHeader />
      <Location location= {currentLocation} changeLocation= {changeLocation}/>
      {state.api_key && state.isLoading &&
        <p>
          Loading weather data...
        </p>
      }
      {!state.isLoading && state.errorMsg &&
        <p style= {{color: 'red'}}>
          {state.errorMsg} -- please refresh the page.
        </p>
      }
      {!state.isLoading && !state.errorMsg &&
        <>
          <Today today= {weatherData.days[0]} />
          <NextDays nextDaysData= {weatherData.days}/>
        </>
      }
      <WFooter />
    </div>
  );
}

export default App;
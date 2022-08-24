import React from 'react';
import WHeader from './Wheader';
import WFooter from './Wfooter';
import Location from './Location';
import Today from './Today';
import NextDays from './Nextdays';
import WeatherLocalDb from './Budapest.json'

function App() {

  const [location, setLocation]= React.useState('Budapest');
  //const [weatherData, setWeatherData]= React.useState(JSON.parse(sessionStorage.getItem('weatherdb'))); //default
  const [weatherData, setWeatherData]= React.useState(WeatherLocalDb);  // << to get correct weather informations delete this
  const [isLoading, setIsLoading]= React.useState(false); //default true
  const [errorMsg, setErrorMsg]= React.useState(null);

        // for free API key, please visit (and sign up)->  https://www.visualcrossing.com/
  /*
  const API_URL= 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';
  const API_KEY= ;
  
  React.useEffect(()=> {
    const fetchData= async ()=> {
      try {
        const response= await fetch(`${API_URL}/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`);
        if(!response.ok) throw Error(`there is no available weather data for ${location} location`);
        const wData= await response.json();
        setWeatherData({...wData});
      } catch(error) {
          setErrorMsg(error.message);
      } finally {
          setIsLoading(false);
      };
    };
    fetchData();
  }, [location]);
  
  setTimeout(() => {  //using session storage to reducing API calls
    sessionStorage.setItem('weatherdb', JSON.stringify(weatherData))
  }, 2000);
  */
  const changeLocation= (newLoc)=> {
    setLocation(newLoc ? newLoc : location);
  };
  
  return (
    <div className="App">
      <WHeader />
      <Location location= {location} changeLocation= {changeLocation}/>
      {isLoading && <p>Loading weather data...</p>}
      {!isLoading && errorMsg && <p>{errorMsg} --- please refresh the page.</p>}
      {!isLoading && !errorMsg &&
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
import React, { useState } from 'react';
import FormComponent from './Components/Form';
import WeatherInfoComponent from './Components/Weather';
import { fetchWeatherData } from './Components/api';

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const handleSearch = async (city: string) => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      setError('');
    } catch (error) {
      return error;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px', backgroundColor: '	#6082B6' }}>
      <h1 style={{ fontSize: '44px', color: 'white' }}>Weather App</h1>
      <FormComponent onSubmit={handleSearch} />
      {error && <p>{error}</p>}
      {weatherData && <WeatherInfoComponent data={weatherData} />}
    </div>
  );
};

export default App;
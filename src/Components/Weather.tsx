import React, { useState } from 'react';
import { Typography, Paper, Grid, Box, Alert } from '@mui/material';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WaterIcon from '@mui/icons-material/Water';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
interface WeatherInfoProps {
    data: any;
}

const kelvinToCelsius = (temp: number) => {
    return (temp - 273.15).toFixed(1);
};

const Weather: React.FC<WeatherInfoProps> = ({ data }) => {
    const [error, setError] = useState<string | null>(null);
    const renderWeatherIcon = () => {
        if (data.weather[0].description.toLowerCase().includes('cloud')) {
            return <FilterDramaIcon style={{ width: '150px', height: '30vh' }} />;
        } else if (data.weather[0].description.toLowerCase().includes('haze')) {
            return <DehazeIcon style={{ width: '150px', height: '30vh', textAlign: 'center' }} />;
        } else if (data.weather[0].description.toLowerCase().includes('rain')) {
            return <ThunderstormIcon style={{ width: '150px', height: '30vh', textAlign: 'center' }} />;
        }
        else {
            return <WbSunnyOutlinedIcon style={{ width: '150px', height: '30vh', textAlign: 'center' }} />;
        }
    }

    return (
        <>
            <div style={{ width: '550px', margin: '20px auto' }}>
                <Paper elevation={3} style={{ backgroundColor: '#A7C7E7', color: '#ffffff', padding: '20px' }}>
                    {error && <Alert severity="error">{error}</Alert>}
                    {renderWeatherIcon()}
                    <h1 style={{ fontSize: '22px', textAlign: 'center' }}>
                        {data.name}</h1>
                    <h1 style={{ fontSize: '22px', textAlign: 'center' }}>
                        {kelvinToCelsius(data.main.temp)} °C
                    </h1>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box display="flex" alignItems="center">
                                <WaterIcon style={{ marginRight: '5px' }} />
                                <Typography variant="body1" gutterBottom>
                                    {data.weather[0].description}
                                </Typography>
                            </Box>
                            <Typography variant="body1" gutterBottom>
                                <span style={{ fontSize: '12px' }}>Weather</span>
                            </Typography>
                            <Box display="flex" alignItems="center">
                                <AirOutlinedIcon style={{ marginRight: '5px' }} />
                                <Typography variant="body1" gutterBottom>
                                    {data.wind.speed} m/s
                                </Typography>
                            </Box>
                            <Typography variant="body1" gutterBottom>
                                <span style={{ fontSize: '12px' }}>Wind Speed</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>

                            <Box display="flex" alignItems="center">
                                <WaterIcon style={{ marginRight: '5px' }} />
                                <Typography variant="body1" gutterBottom>
                                    {data.main.humidity}%
                                </Typography>
                            </Box>
                            <Typography variant="body1" gutterBottom>
                                <span style={{ fontSize: '12px' }}>Humidity</span>
                            </Typography>


                            <Box display="flex" alignItems="center">
                                <WaterIcon style={{ marginRight: '5px' }} />
                                <Typography variant="body1" gutterBottom>
                                    {data.main.pressure} hPa
                                </Typography>
                            </Box>
                            <Typography variant="body1" gutterBottom>
                                <span style={{ fontSize: '12px' }}>Pressure</span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </>
    );
};

export default Weather;


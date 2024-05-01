import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { fetchWeatherData } from '../Components/api';
import React, { useState, useEffect } from 'react';
import { Typography, Paper, Grid, Box, Alert } from '@mui/material';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WaterIcon from '@mui/icons-material/Water';

interface FormProps {
    onSubmit: (city: string) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [city, setCity] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [showWeather, setShowWeather] = useState(true);

    const handleSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();
            const weatherData = await fetchWeatherData(city);
            onSubmit(city);
            setCity('');
            setShowWeather(false);
        } catch (error) {
            setError("Data not found. Please enter a valid name.")
            setTimeout(() => {
                setError("")
                setCity('');
            }, 3000)
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input style={{ padding: '15px', borderRadius: '15px', width: '490px' }} type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                <IconButton type="submit">
                    <SearchIcon />
                </IconButton>
                {error && <Alert severity="error">{error}</Alert>}
            </form>
            {showWeather && (

                <div style={{ width: '550px', margin: '20px auto' }}>

                    <Paper elevation={3} style={{ backgroundColor: '#A7C7E7', color: '#ffffff', padding: '20px' }}>
                        <WbSunnyOutlinedIcon style={{ width: '150px', height: '30vh', textAlign: 'center' }} />
                        <h1 style={{ fontSize: '22px', textAlign: 'center' }}>
                            {"New York"}</h1>
                        <h1 style={{ fontSize: '22px', textAlign: 'center' }}>
                            {12}°C
                        </h1>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box display="flex" alignItems="center">
                                    <WaterIcon style={{ marginRight: '5px' }} />
                                    <Typography variant="body1" gutterBottom>
                                        {"Sunny"}
                                    </Typography>
                                </Box>
                                <Typography variant="body1" gutterBottom>
                                    <span style={{ fontSize: '12px' }}>Weather</span>
                                </Typography>
                                <Box display="flex" alignItems="center">
                                    <AirOutlinedIcon style={{ marginRight: '5px' }} />
                                    <Typography variant="body1" gutterBottom>
                                        {8} m/s
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
                                        {69}%
                                    </Typography>
                                </Box>
                                <Typography variant="body1" gutterBottom>
                                    <span style={{ fontSize: '12px' }}>Humidity</span>
                                </Typography>


                                <Box display="flex" alignItems="center">
                                    <WaterIcon style={{ marginRight: '5px' }} />
                                    <Typography variant="body1" gutterBottom>
                                        {78} hPa
                                    </Typography>
                                </Box>
                                <Typography variant="body1" gutterBottom>
                                    <span style={{ fontSize: '12px' }}>Pressure</span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>

            )}
        </>
    );
};

export default Form;
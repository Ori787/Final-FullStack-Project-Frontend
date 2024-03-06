import { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import accessToken from "./accessToken";
import { useEffect } from "react";


const HotelList = () => {
    const [city, setCity] = useState('');
    const [hotels, setHotels] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchHotels = async () => {
        try {
          const response = await axios.get('/reference-data/locations/hotels/by-city', {
            params: {
              city: city // Use the city state variable as the parameter
            }
          });
          setHotels(response.data.data);
        } catch (error) {
          setError(error.message);
        }
      };
  
      if (city !== '') {
        fetchHotels();
      }

      return () => {
        // Any cleanup code here
      };
    }, [city]); 

    return (
        <>
                  <Box sx={{ flexGrow: 1, mt:5, ml:6.2 }}>
                      <Grid container spacing={2} columns={36}>
            <Grid item xs={12} sm={6}>
            <TextField sx={{bgcolor:'white'}}
                        autoComplete="city"
                        name="city"
                        fullWidth
                        id="city"
                        label="City"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        autoFocus
                      />
                    </Grid>
              <Grid item xs={2.4}>
              </Grid>
            </Grid>
            </Box>
              </>
          );
}

export default HotelList;
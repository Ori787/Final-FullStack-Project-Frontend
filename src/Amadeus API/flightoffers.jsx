import axios from "axios";
import { useState } from "react";
import accessToken from "./accessToken";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MediaCover from "../components/card";

const FlightOffers = () => {

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [adults, setAdults] = useState('');
    const [price, setPrice] = useState(null);
    const [flightOffers, setFlightOffers] = useState([]);


const baseURL = "https://test.api.amadeus.com/v2";

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
try {
const response = await axios.get(`${baseURL}/shopping/flight-offers`, {
    headers: {
Authorization: `Bearer ${accessToken}`
    },
    params: {
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate: departureDate,
      returnDate: returnDate,
      adults: adults,
    }
});


const data = response.data.data;

setFlightOffers(data);

console.log("data", data)

setPrice(data.price);


} catch (err) {
console.error('Error getting flight offers', err);
} finally {
    setLoading(false);
}
};

return (
  <>
            <Box sx={{ flexGrow: 1, mt:5, ml:6.2 }}>
                <Grid container spacing={2} columns={36}>
      <Grid item xs={12} sm={6}>
      <TextField sx={{bgcolor:'white'}}
                  autoComplete="From"
                  name="From"
                  fullWidth
                  id="From"
                  label="From"
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField sx={{bgcolor:'white'}}
                  autoComplete="To"
                  name="To"
                  fullWidth
                  id="To"
                  label="To"
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField sx={{bgcolor:'white'}}
                  autoComplete="Depart"
                  name="Depart"
                  fullWidth
                  id="Depart"
                  label="Depart"
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  autoFocus
                  InputLabelProps={{
                    sx: {mt:-1.8}
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField sx={{bgcolor:'white'}}
                  autoComplete="Return"
                  name="Return"
                  fullWidth
                  id="Return"
                  label="Return"
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  autoFocus
                  InputLabelProps={{
                    sx: {mt:-1.8}
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField sx={{bgcolor:'white'}}
                  autoComplete="Travelers"
                  name="Travelers"
                  fullWidth
                  id="Travelers"
                  label="Travelers"
                  type="number"
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  autoFocus
                />
              </Grid>
        <Grid item xs={2.4}>
        <Button variant="contained" sx={{height:'6.9vh'}} onClick={handleSubmit}>Search</Button>
        </Grid>
      </Grid>
      </Box>
      <Box sx={{mt:10}}>
      {flightOffers.map((offer, index) => (
      <MediaCover key={index}
       price={offer.price.total}
        origin={offer.itineraries[0].segments[0].departure.iataCode}
         destination={offer.itineraries[0].segments[0].arrival.iataCode} 
          isDirectFlightOutbound={offer.itineraries[0].segments.length === 1}
          isDirectFlightInbound={offer.itineraries.length > 1 && offer.itineraries[1].segments.length === 1}
          connectionFinalDestination={offer.itineraries[0].segments.length > 1 ? offer.itineraries[0].segments[1].arrival.iataCode : null
          }
          />
))};
    </Box>
        </>
    );
};




export { FlightOffers };
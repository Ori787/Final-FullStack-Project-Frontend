import axios from "axios";
import { useState } from "react";
import accessToken from "./accessToken";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MediaCover from "../components/flight-offer-card";
import { useLocation } from "react-router-dom";
import HotelOffers from "./hoteloffers";
import DestinationList from "../components/DestinationList";
import Typography from '@mui/material/Typography';
import LoginLogic from "../Logic/Login/login";


const FlightOffers = () => {

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [adults, setAdults] = useState('');
    const [price, setPrice] = useState(null);
    const [flightOffers, setFlightOffers] = useState([]);
 

    const location = useLocation();

    const ishome = location.pathname === '/';

    const isHotels = location.pathname === '/hotels'


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


} catch (err) {
console.error('Error getting flight offers', err);
} finally {
    setLoading(false);
}
};


return (
  <>
  { ishome && (
   <Box sx={{ flexGrow: 1, mt: 5, ml: 2.5, width: '80vw' }}>
   <Grid container spacing={2}>
 
     <Grid item xs={12} sm={12} md={2} lg={2}>
       <TextField
         sx={{ bgcolor: 'white', width: '100%' }}
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
 
     <Grid item xs={12} sm={12} md={2} lg={2}>
       <TextField
         sx={{ bgcolor: 'white', width: '100%' }}
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
 
     <Grid item xs={12} sm={12} md={2} lg={2}>
       <TextField
         sx={{ bgcolor: 'white', width: '100%' }}
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
           sx: { mt: -1.8 }
         }}
       />
     </Grid>
 
     <Grid item xs={12} sm={12} md={2} lg={2}>
       <TextField
         sx={{ bgcolor: 'white', width: '100%' }}
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
           sx: { mt: -1.8 }
         }}
       />
     </Grid>
 
     <Grid item xs={12} sm={12} md={2} lg={2}>
       <TextField
         sx={{ bgcolor: 'white', width: '100%' }}
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
 
     <Grid item xs={12} sm={12} md={2} lg={2}>
       <Button variant="contained" sx={{ height: '6.9vh', width: '100%' }} onClick={handleSubmit}>Search</Button>
     </Grid>
 
   </Grid>
 </Box>
 
)}
{isHotels && (
<HotelOffers/>
)}
            
            {ishome && (
    <Box sx={{ mt: 10 }}>
      {!flightOffers.length && (
        <>
 <Typography variant="h4" sx={{ mt: 13, fontWeight: '100' }}>Destination Recommendations</Typography>
         <DestinationList />
        </>
      )}
        {flightOffers.map((offer, index) => (
            <MediaCover
                key={index}
                price={offer.price.total}
                origin={offer.itineraries[0].segments[0].departure.iataCode}
                destination={offer.itineraries[0].segments[0].arrival.iataCode}
                isDirectFlightOutbound={offer.itineraries[0].segments.length === 1}
                isDirectFlightInbound={offer.itineraries.length > 1 && offer.itineraries[1].segments.length === 1}
                connectionFinalDestination={offer.itineraries[0].segments.length > 1 ? offer.itineraries[0].segments[1].arrival.iataCode : null}
            />
        ))}
    </Box>
)}

        </>
    );
};


export { FlightOffers };
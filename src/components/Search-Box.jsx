import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ColumnsGrid from './Search-Inputs';
import AccountMenu from './Account-header';
import { useLocation } from 'react-router-dom';
import HotelOffers from '../Amadeus API/hoteloffers';
import { useNavigate } from "react-router-dom";


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '100vw',
  height: '26vw',
  backgroundColor: '#040720',
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

const MyBox = () => {

  const navigate = useNavigate();

  const navigateToHotels = () => {
    navigate('/hotels')
  }

  const navigateToFlights = () => {
    navigate('/')
  }

  const navigateToCars = () => {
    navigate('/cars')
  }

  return (
    <Stack direction="row" spacing={2}>
      <DemoPaper variant="outlined">
        <AccountMenu/>
        <Typography variant='h4' color={'white'} mr={120} mt={5}>BeSmart. Travel Smart.</Typography>
<Container sx={{ml: -48.5, mt:5,}}>
  <Button variant="outlined" onClick={navigateToFlights} sx={{marginInline:1, color: 'white'}}>Flights</Button>
  <Button variant="outlined" onClick={navigateToHotels} sx={{marginInline:1, color: 'white'}}>Hotels</Button>
  <Button variant="outlined" onClick={navigateToCars} sx={{marginInline:1, color: 'white'}}>Car Rental</Button>
  </Container>
  <ColumnsGrid/>
        </DemoPaper>
    </Stack>
  );
}

export {MyBox};
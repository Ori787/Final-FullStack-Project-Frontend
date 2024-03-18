import axios from "axios";
import { useState, useEffect } from "react";
import DestinationCard from "./destinationCard";
import Grid from '@mui/material/Grid';



const DestinationList = () => {

    const [destinationList, setDestinationList] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
        const URL = "http://localhost:8080/destinations";
        try {
            const response = await axios.get(URL, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = response.data;
            
            setDestinationList(data);
            
            } catch (err) {
            console.error('something went wrong');
            }
        };
        fetchData()
    }, [])
  


return (
    <Grid container spacing={2} mt={4} sx={{ ml: { xs: 1.5, sm: 1.5, md: -1, lg: -1 } }} justifyContent={"space-between"}>
    {destinationList.map((destination, index) => (
        <Grid item xs={12} sm={12} md={3} key={index}>
<DestinationCard
Image={destination.Image}
Destination={destination.Destination}
Description={destination.Description}
/>
</Grid>
    ))
    }
    </Grid>
)
}


export default DestinationList;

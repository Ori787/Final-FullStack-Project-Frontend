import axios from "axios";
import { useState, useEffect } from "react";
import DestinationCard from "../components/destinationCard";
import Box from '@mui/material/Box';



const DestinationList = async () => {

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
            console.log("data", data)
            setDestinationList(data);
            
            } catch (err) {
            console.error('something went wrong');
            }
        };
        fetchData()
    }, [])
  


return (
    <Box>
    {destinationList.map((destination, index) => (
<DestinationCard
key={index}
Image={destination.Image}
Destination={destination.Destination}
Description={destination.Description}
/>
    ))
    };
    </Box>
)
}


export default DestinationList;

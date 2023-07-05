
import React from 'react';
import {useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {ButtonInside,TextInside} from './style';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@material-ui/core";
//import Userdata from "./Orderdata";

const styleGrid = {
  paddingBottom: "12px",
  width: "100%"
};

const propStyleGrid = {
  container: true,
  spacing:5,
  style: styleGrid
}; 

function Order() {

  const navigate = useNavigate();
  
  const [apidata,setApidata] = useState([]);

  const apiadv = "https://jsonserver-sugo.onrender.com/Order"; 
  
  const data = () => {
     fetch(apiadv)
       .then((response)=> response.json())
       .then((response) => {
        setApidata(response)
       })
};

useEffect(()=> {
  data()
},[])


return(
  <section>
    <TextInside> PLEASE FIND ORDER API DATA LIST IN THE BELOW.</TextInside>
    <Grid {...propStyleGrid}>
              { apidata.map((item,i) => (
             <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              style={{ display: "flex", justifyContent: "center" }}
             >
             <Card sx={{ minWidth:335 , maxWidth:335 }} style={{backgroundColor: "#f3f3f3f1", borderRadius:"16px" , minHeight:"230" , borderColor:"grey", borderWidth:"2px"}} variant="outlined">
             <CardContent >
             <Typography gutterBottom variant="h6" component="div" style={{color:"darkgrey"}}>
              OrderId:{item.order_id}
             </Typography>
             <br/>
             <Typography gutterBottom variant="h6" style={{color:"darkgrey"}}>
              Quantity: {item.quantity}
             </Typography>
             <br/>
             <Typography gutterBottom variant="h6" style={{color:"darkgrey"}}>
               UserId: {item.user_id}
             </Typography>
             <br/>
             <Typography gutterBottom variant="h6" style={{color:"darkgrey"}}>
              OrderDate: {item.order_date}
             </Typography>
             </CardContent>
             </Card>
             </Grid>
             ))}
             </Grid>

    <ButtonInside as="a"
      onClick={() => navigate("/")}
      target="_blank"
      rel="noopener"
      primary
      > Back To Home 
    </ButtonInside>
    <ButtonInside as="a"
      href="https://jsonserver-sugo.onrender.com/Order"
      target="_blank"
      rel="noopener"
      primary
      > Order JSON Data 
    </ButtonInside>
    <ButtonInside as="a"
      onClick={() => navigate("/Orderchart")}
      target="_blank"
      rel="noopener"
      primary
      > Data Visualization
    </ButtonInside>
</section>
);
}
     
export default Order;


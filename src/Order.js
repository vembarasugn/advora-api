
import React from 'react';
import {useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {ButtonInside,TextInside} from './style';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@material-ui/core";

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

  const apiadv = "https://assessment.api.vweb.app/orders"; 
  
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
             <Card sx={{ minWidth:335 , maxWidth:335 }} style={{backgroundColor: "#f3f3f3f1", borderRadius:"16px" , minHeight:"230" , borderColor:"grey", borderWidth:"3px"}} variant="outlined">
             <CardContent  className="Card-text" >
             <Typography gutterBottom variant="h5" component="div">
              OrderId:{item.order_id}
             </Typography>
             <br/>
             <Typography gutterBottom variant="body2">
              Quantity: {item.quantity}
             </Typography>
             <br/>
             <Typography gutterBottom variant="body2">
               UserId: {item.user_id}
             </Typography>
             <br/>
             <Typography gutterBottom variant="body2">
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
      href="https://assessment.api.vweb.app/orders"
      target="_blank"
      rel="noopener"
      primary
      > Order JSON Data 
    </ButtonInside>
</section>
);
}
     
export default Order;


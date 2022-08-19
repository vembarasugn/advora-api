import React from 'react';
import {Button,Text,SubText} from './style';
import {useNavigate } from "react-router-dom";

function Home(){
 
const navigate = useNavigate();

return(
  <section>
        <Text> WELCOME TO ADVORA. AN EDTECH COMPANY THAT FOCUING BUSINESS IN TECHNOLOGY,FINANCE AND ENTERPRISES. </Text>
        <SubText> You can find Advora APIs by clicking the below links.</SubText>
        <Button as="a"
           onClick={() => navigate("/User")}
           target="_blank"
           rel="noopener"
           primary
         > User Data</Button>
          <Button as="a"
            onClick={() => navigate("/Product")} 
            target="_blank"
            rel="noopener"
            primary
          > Product Data</Button>
          <Button as="a"
            onClick={() => navigate("/Order")}
            target="_blank"
            rel="noopener"
            primary
          > Order Data</Button>
      </section> 
    )
};
      
export default Home;
        
        
        

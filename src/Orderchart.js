import React from 'react';
import Chart from 'react-apexcharts';
import {useNavigate} from "react-router-dom";
import {ButtonInside,TextInside} from './style';

function Orderchart(){

  const navigate = useNavigate();

  const series = [
    {
      name:"Products Ordered in Quantity", 
      data:[15,11,12,2,9,4,20,9,18,19,15,6,14,3,5,16,14,20]
    }
  ];

  const options = {
    chart: {
      id: "simple-bar"
    },
    xaxis: {
      categories:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
  };

  return(
     <section>
      <TextInside> PLEASE FIND ORDER API DATA VISIUALISATION IN THE BELOW.</TextInside>
         <Chart
          options={options}
          series={series}
          type="bar"
          width="650"
          height="650"
        />
      <ButtonInside as="a"
      onClick={() => navigate("/")}
      target="_blank"
      rel="noopener"
      primary
      > Back To Home 
     </ButtonInside>

     </section>
    )
}

export default Orderchart;

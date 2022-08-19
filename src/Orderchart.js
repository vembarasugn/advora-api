import React from 'react';
import Chart from 'react-apexcharts';
//import { useEffect, useState } from 'react';

function Orderchart(){

    //const [order, setOrder] = useState([]); 
    //const [quantity, setQuantity] = useState([]);
    
    // useEffect(()=> {
    //     const getOrderdata = async()=>{
    //     const url ="https://assessment.api.vweb.app/orders";
    //     try{
    //       const response = await fetch(url);
    //       const data = await response.json();
    //       //setOrder(data.map((item)=>item.order_id));
    //       //setQuantity(data.map((item)=>item.quantity));
    //     }catch(err){
    //         console.log(err);
    //     }
    //   };
    //   getOrderdata();
    // },[]);

    
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
         <Chart
          options={options}
          series={series}
          type="bar"
          width="450"
        />
     </section>
    )
}

export default Orderchart;
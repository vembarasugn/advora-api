import React from 'react';
import {Line} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import {ButtonInside,TextInside} from './style';
import {useNavigate} from "react-router-dom";
Chart.register(...registerables);

function Productchart(){

  const navigate = useNavigate(); 

    return(
        <div>
        <TextInside> Product Data Visualization </TextInside>
        <Line
          data={{
            labels:['Product-1','Product-2','Product-3','Product-4','Product-5','Product-6','Product-7','Product-8','Product-9','Product-10',
            'Product-11','Product-12','Product-13','Product-14','Product-15','Product-16','Product-17','Product-18','Product-19','Product-20',
            'Product-21','Product-22','Product-23','Product-24','Product-25','Product-26','Product-27','Product-28','Product-29','Product-30',
            'Product-31','Product-32','Product-33','Product-34','Product-35','Product-36','Product-37','Product-38','Product-39','Product-40',
            'Product-41','Product-42','Product-43','Product-44','Product-45','Product-46','Product-47','Product-48','Product-49','Product-50',    
             ],
             datasets:[
                {
                    label:'Selling Price',
                    data:[41,27,76,70,57,58,7,81,93,36,
                          70,84,77,63,46,39,46,5,89,65,
                          38,35,19,7,93,34,29,14,51,90,
                          24,24,83,22,85,62,17,95,51,24,
                          80,84,7,56,96,43,9,68,21,80
                    ],
                    backgroundColor: [
                        'yellow',
                    ],
                    borderColor:[
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth:2
                },
                {
                    label:'Stock',
                    data:[92,88,85,99,21,58,98,91,89,25,
                          11,33,79,100,88,22,46,15,62,94,
                          56,49,73,19,18,16,41,90,89,69,
                          11,41,1,98,42,16,26,30,27,63,
                          15,25,28,92,82,95,42,28,7,31
                    ],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth:2
                }
              ]      
        }}
          option={{
            maintainAspectRatio:false
          }}
          width={20}
          height={20}
        />
        <ButtonInside as="a"
          onClick={() => navigate("/")}
          target="_blank"
          rel="noopener"
          primary
        > Back To Home 
        </ButtonInside>
      </div>
    )
}

export default Productchart;
import React, { useContext }from 'react';

import Alert from '../molecules/Alert';
import Div from '../atoms/Div';
import H2 from "../atoms/H2";
import H3 from "../atoms/H3";
import Img from "../atoms/Img";
import P from "../atoms/P";

import { ApiContext } from '../../context/ApiContext';
import {nanoid} from "nanoid";
import sortBySeverity from '../../utils/sortBySeverity';
import SuscriptionType from '../molecules/SuscriptionType';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);




function Slider (props) {

   const context = useContext(ApiContext);  

   return (
       
    <Swiper
    spaceBetween={0}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
       {context.carStatusLoaded && context.user[0].cars.map(cars => (
                
       <SwiperSlide key={cars.id} className="slide">

          
           <Div column center>
               <Div img>
                   <Img src={cars.staticFeatures.Image}/>
               </Div>
                   <H2>{cars.staticFeatures.brand} {cars.staticFeatures.model}</H2>
                   <P>{cars.staticFeatures.year} - {cars.variableFeatures.kM} kms</P>
           </Div>
            
           <Div column>           
               <Div row spaceBet>
                   <H3>Kilómetros/año</H3>
                   <H3>{cars.variableFeatures.kM} kms</H3>
               </Div >
               <Div row spaceBet>
               <H3>Valor de vehículo</H3>
               <H3>{cars.variableFeatures.currentValue} €</H3>
               </Div>
           </Div >
            
           <Div column>
           <SuscriptionType {...props}/>
           </Div>
            
           <Div column>
           <H2>Avisos pendientes</H2>

           {context.carStatusLoaded && context.carStatus.flat().sort((a,b)=>sortBySeverity(a.status)-(sortBySeverity(b.status))).map(elem=>{
              console.log(elem);
              return ( 
                   elem.status!=="success" && 
                   <Alert
                       key={nanoid()}
                       dueDate = {elem.dueDate}
                       title= {elem.title}
                       description={elem.statusDescription}
                       type={elem.type} 
                       status={elem.status}  
                   />
               )

               })}                
       </Div>
       </SwiperSlide>
        
       ))}
   </Swiper>

  );
};

export default Slider;
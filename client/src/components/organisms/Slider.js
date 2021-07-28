import React, { useContext }from 'react';
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";
import Div from '../atoms/Div';
import H2 from "../atoms/H2";
import H3 from "../atoms/H3";
import Img from "../atoms/Img";
import P from "../atoms/P";
import SpanValue from '../atoms/SpanValue';
import { ApiContext } from '../../context/ApiContext';
import SuscriptionType from '../molecules/SuscriptionType';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';
import { AlertsContainer } from './AlertsContainer';
import Span from '../atoms/Span';

// install Swiper modules
SwiperCore.use([Navigation]);




function Slider (props) {

   const context = useContext(ApiContext);  

   return (
       
    <Swiper
    spaceBetween={20}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
       {context.carStatusLoaded && context.user.cars.map(cars => (
                
       <SwiperSlide key={cars.id} className="slide">

          
           <Div column center>
         
           <SuscriptionType {...props}/>
           
               <Div img>
            
                    <ImArrowLeft2 style={{ 
                        color:"#1D4A7E", 
                        width: "29px",
                        height: "51px",
                        margin: "14px" }}
                    />
            
                    <Img src={cars.staticFeatures.Image}/> 
            
                    <ImArrowRight2 style={{ 
                        color:"#1D4A7E", 
                        width: "29px",
                        height: "51px",
                        margin: "14px" }}
                    />

               </Div>

                   <H2>{cars.staticFeatures.brand} {cars.staticFeatures.model}</H2>
                   <P>{cars.staticFeatures.year} - {cars.variableFeatures.kM} kms - {cars.variableFeatures.currentValue} € <SpanValue>(Valor Actual)</SpanValue></P>
           </Div>
           <AlertsContainer/>
       </SwiperSlide>
        
       ))}
   </Swiper>

  );
};

export default Slider;
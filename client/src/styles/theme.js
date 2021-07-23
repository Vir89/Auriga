import React from "react";
import { ThemeProvider } from "styled-components";


const theme = {
    colors : {
        primary : "#1D4A7E",
        secondary : "#2FB695",
        tertiary : "#B2D9DB",
        quaternary : "#517B9A",
        quinary :"#F3FAEF",
        danger: "#D5494C",
        warning:"#EBA900",
        success:"#2FB695",
        white: "#FFFFFF",
        lightDanger: "#FF9187",
        buttonSecondary: "#FAFAFA",
        black: "#000000",
        googleBlue: "#4285f4",
        hoverButton: "#1669f2",
        darkGray: "#828282",
        whiteSmoke:"#f5f5f5"


    },
    largeViewport : {
        size: "1000px", // to be used as min-width in media queries
       // padding : "50px", // what is this?
        margin : "2.75%",  // gutter inbetween group of components (e.g. text sections vs accordion)
        
    },
    mediumViewport : {
        minSize : "768px",
        maxSize : "1000px",
       // padding : "30px",
        margin : "30px",
    },
    smallViewport : {
        size : "768px", // to be used as max-width in media queries
       // padding : "30px",
        margin : "30px",
    },

    textWeight : {
        regular : 400,
        medium : 500,
        semiBold : 600,
        bold : 700,

    },
    
    mainContentWidth : "80%", // all viewports have the same width in the outermost div that holds everything
    mainContentMaxWidth : "1080px",
    inbetweenPadding : "20px", // used as padding bottom between components
    inbetweenTextPadding : "20px", // used as padding bottom between text sections (headers, paragraphs, etc.)
    bigMarginBottom : "60px"
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
  export default Theme;
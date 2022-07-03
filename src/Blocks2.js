import React, { useState } from 'react';
import { Grid, Box } from "@mui/material";
import { Container, Typography } from "@mui/material";
import styled from 'styled-components';

const Carbk = styled.div`
background: Green;
`




const Blocks2 = (props) => {
    let {distance} = props

    let src = ""
    /*
    if({colorImg} == "Red"){
        setSrc("img/sirenRed.jpg")
    }
    else if({colorImg} == "Yellow"){
        setSrc("img/sirenYellow.jpg")
    }
    else{
        setSrc( "img/sirenBlue.jpg")
    }
    */
    /*
    if(colorImg < 100 ){
        setSrc("img/sirenRed.jpg")
      }
      else if (colorImg<300){
        setSrc("img/sirenYellow.jpg")
      }
      else {
        setSrc( "img/sirenBlue.jpg")
      }
    */
      if(distance < 100 ){
        src = "img/sirenRed.jpg"
      }
      else if (distance<300){
        src = "img/sirenYellow.jpg"
      }
      else {
        src = "img/sirenBlue.jpg"
      }
      console.log(distance)
      console.log(src)
    return(
    <>
        <Grid container spacing={0.1} p={2}>
            <Grid item xs={4} >
                <Box bgcolor="primary.main" color="info.contrastText" sx={{width:'170px', height:'170px'}} >
                1
                </Box> 
            </Grid>
            <Grid item xs={4} sx = {{borderCollapse:'collapse'}}>
                <Box bgcolor="warning.main" color="info.contrastText" sx={{width:'170px', height:'170px'}} >
                2
                </Box> 
            </Grid>
            <Grid item xs={4}>
                <Box bgcolor="error.main" color="info.contrastText" sx={{width:'170px', height:'170px'}}>
                3
                </Box> 
            </Grid>
            <Grid item xs={4}>
                <Box bgcolor="secondary.main" color="info.contrastText" sx={{width:'170px', height:'170px'}} >
                4
                </Box> 
            </Grid>
            <Grid item xs={4}>
                
                <img src='img/car.png' width={170} height={170} alt='mycar'  />
                
            </Grid>
            <Grid item xs={4}>
                <Box bgcolor="warning.main" color="info.contrastText" sx={{width:'170px', height:'170px'}}>
                6
                </Box> 
            </Grid>
            <Grid item xs={4}>
                <Box bgcolor="yellow" color="info.contrastText" sx={{width:'170px', height:'170px'}}>
                7
                </Box> 
            </Grid>
            <Grid item xs={4}>
                <Box bgcolor="warning.main" color="info.contrastText" sx={{width:'170px', height:'170px'}}>
                8
                </Box> 
            </Grid>
            <Grid item xs={4}>
                <img src={src} width={170} height={170} alt='ambulance' />
            </Grid>
        </Grid>

        
    
    </>


    )




}


export default Blocks2;
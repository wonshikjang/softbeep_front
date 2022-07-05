import React, { useState } from 'react';
import { Grid, Box } from "@mui/material";
import { Container, Typography } from "@mui/material";
import styled from 'styled-components';

const Carbk = styled.div`
background: Green;
`




const Blocks2 = ({distance,direction}) => {
    //console.log(typeof(direction))
    //console.log(direction)
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
      //console.log(distance)
      //console.log(src)
    return(
    <>
        <Grid container spacing={0.1} p={2}>
            <Grid item xs={4} >
                {
                direction ==="1" ?  <img src={src} width={170} height={170} alt='ambulance' />
                    :
                    <Box bgcolor="primary.main" color="info.contrastText" sx={{width:'170px', height:'170px'}} >
                    1
                    </Box> 
                }
            </Grid>
            <Grid item xs={4} sx = {{borderCollapse:'collapse'}}>
                {
                direction ==="2" ?  <img src={src} width={170} height={170} alt='ambulance' />
                    :
                    <Box bgcolor="warning.main" color="info.contrastText" sx={{width:'170px', height:'170px'}} >
                    2
                    </Box>
                } 
            </Grid>
            <Grid item xs={4}>
                {
                direction ==="3" ?  <img src={src} width={170} height={170} alt='ambulance' />
                    :
                    <Box bgcolor="error.main" color="info.contrastText" sx={{width:'170px', height:'170px'}}>
                    3
                    </Box> 
                }
            </Grid>
            <Grid item xs={4}>
                {
                direction ==="4" ?  <img src={src} width={170} height={170} alt='ambulance' />
                    :
                    <Box bgcolor="secondary.main" color="info.contrastText" sx={{width:'170px', height:'170px'}} >
                    4
                    </Box> 
                }
            </Grid>
            <Grid item xs={4}>
                
                <img src='img/car.png' width={170} height={170} alt='mycar'  />
                
            </Grid>
            <Grid item xs={4}>
                {
                direction ==="6" ?  <img src={src} width={170} height={170} alt='ambulance' />
                    :
                    <Box bgcolor="warning.main" color="info.contrastText" sx={{width:'170px', height:'170px'}}>
                    6
                    </Box>
                } 
            </Grid>
            <Grid item xs={4}>
                {
                direction ==="7" ?  <img src={src} width={170} height={170} alt='ambulance' />
                    :
                    <Box bgcolor="yellow" color="info.contrastText" sx={{width:'170px', height:'170px'}}>
                    7
                    </Box> 
                }
            </Grid>
            <Grid item xs={4}>
                {
                direction ==="8" ?  <img src={src} width={170} height={170} alt='ambulance' />
                    :
                    <Box bgcolor="warning.main" color="info.contrastText" sx={{width:'170px', height:'170px'}}>
                    8
                    </Box> 
                }
            </Grid>
            <Grid item xs={4}>
                {
                direction ==="9" ?  <img src={src} width={170} height={170} alt='ambulance' />
                    :
                    <Box bgcolor="warning.main" color="info.contrastText" sx={{width:'170px', height:'170px'}}>
                    9
                    </Box> 
                }
            </Grid>
        </Grid>

        
    
    </>


    )




}


export default Blocks2;
import React from 'react';
import { Grid, Box } from "@mui/material";
import { Container, Typography } from "@mui/material";
import styled from 'styled-components';
const Block1 = styled.div`
width: 140px;
height: 140px;
border-style: solid none dotted solid;
background: Green;
display: inline-block;
margin:0;

`

const Blocks = (props) => {

    return(
    <>
        <Grid container spacing={0} sx = {{borderCollapse:'collapse'}}>
            <Grid item xs={4} sx = {{borderCollapse:'collapse'}}>
                <Box bgcolor="primary.main" color="info.contrastText" p={2} sx={{ mb: -1,borderColor: 'black', borderStyle: 'solid',borderBottom:0, borderCollapse:'collapse'}}>
                1
                </Box> 
            </Grid>
            <Grid item xs={4} sx = {{borderCollapse:'collapse'}}>
                <Box bgcolor="warning.main" color="info.contrastText" p={2} sx={{ borderColor: 'black', borderStyle: 'solid', borderCollapse:'collapse'}}>
                2
                </Box> 
            </Grid>
            <Grid item xs={4}>
                <Box bgcolor="warning.main" color="info.contrastText"p={2}sx={{ borderColor: 'black', borderStyle: 'solid solid none none'}}>
                3
                </Box> 
            </Grid>
            <Grid item xs={4}>
                <Box bgcolor="warning.main" color="info.contrastText" p={2} sx={{ borderColor: 'black', borderStyle: 'dotted dotted dotted solid'}}>
                4
                </Box> 
            </Grid>
            <Grid item xs={4}>
                <Box bgcolor="warning.main" color="info.contrastText" p={2} sx={{ borderColor: 'black', borderStyle: 'dotted',borderCollapse: 'collapse'}}>
                5
                </Box> 
            </Grid>
            <Grid item xs={4}>
                <Box bgcolor="warning.main" color="info.contrastText" p={2}>
                6
                </Box> 
            </Grid>
            <Grid item xs={4}>
                <Box bgcolor="warning.main" color="info.contrastText" p={2}>
                7
                </Box> 
            </Grid>
            <Grid item xs={4}>
                <Box bgcolor="warning.main" color="info.contrastText" p={2}>
                8
                </Box> 
            </Grid>
            <Grid item xs={4}>
                <Box bgcolor="warning.main" color="info.contrastText" p={2}>
                9
                </Box> 
            </Grid>
        </Grid>

        
    
    </>


    )




}


export default Blocks;
import { Container } from '@mui/material';
import styled from 'styled-components';

//import Blocks from './Blocks';
import Blocks2 from './Blocks2';

import React, { useEffect, useRef, useState } from 'react';
import MapContainer from './kakao';

const Block = styled.div`

place-items: center;
display: inline-block;
width:450px;

  
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(3, 80px);
  grid-gap: 5px;
`

function App() {
  let [disValue, setDisValue] = useState(0)
  let [dirValue, setDirValue] = useState(0)
  const [color,setColor]= useState("");
  /*
  useEffect(() => {
  
    const script = document.createElement("script");
    script.innerHTML = `         
        function initTmap() {
            var map = new Tmapv2.Map("TMapApp", {
                center: new Tmapv2.LatLng(37.566481622437934,126.98502302169841),
                width: "100%",
                height: "100%",
                zoom:15
            });
        }
        
        initTmap();
   `;
    script.type = "text/javascript";
    script.async = "async";
    document.head.appendChild(script);
  }, []);
  */
  return (
 
    <Container maxWidth="sm">


        <MapContainer />
        <Blocks2 distance={disValue} direction = {dirValue}/>
        <input 
            onChange={(event) => setDisValue(event.target.value)} 
            placeholder = "거리(m) 를 입력해주세요"
        />
         <input 
            onChange={(event) => setDirValue(event.target.value)} 
            placeholder = "방향(1-9(5제외)) 을 입력해주세요"
        />
         <div>{disValue}</div>    
         <div>{dirValue}</div>
    </Container>
     /*
        <div
      id="TMapApp"
      style={{
        width: "890px", 
        height: "400px",
        position: "fixed"
      
        }}
      />
    */
  );
}
export default App;
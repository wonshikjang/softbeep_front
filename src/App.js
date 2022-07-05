import { Container } from '@mui/material';
import styled from 'styled-components';

//import Blocks from './Blocks';
import Blocks2 from './Blocks2';
import DisDir from './distance';
import React, { useEffect, useRef, useState } from 'react';

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
  const onChange= e => {
    setDisValue(e.target.value);
    //const disValue = disInput.current.target.value;
    
  };
  */
  /*
  useEffect(()=>{
    if(inputValue < 100 ){
      setColor("Red");
    }
    else if (inputValue<300){
      setColor("Yellow")
    }
    else {
      setColor("Blue")
    }
    console.log(color)
  },[inputValue])
  */
  return (

    <Container maxWidth="sm">
        
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
  );
}
export default App;
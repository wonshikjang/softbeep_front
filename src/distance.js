import React, { useState } from 'react';

function DisDir() {
    const [dis, setDis] = useState("");
  
    //const { distance  } = inputs; // 비구조화 할당을 통해 값 추출
  
    const onChange = (e) => {
      //const { dis } = e.target; // 우선 e.target 에서 name 과 value 를 추출
      setDis(
       e.target
      );
    };
  
    const onReset = () => {
      setDis(
     0
      )
    };
  
  
    return (
      <div>
        <input name="distance" placeholder="거리(m)" onChange={onChange} value={dis} />
        <button onClick={onReset}>초기화</button>
        <div>
          <b>값: </b>
          {dis}
        </div>
      </div>
    );
  }
  
  export default DisDir;
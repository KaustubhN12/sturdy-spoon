import React from "react";
import { useSelector } from "react-redux";

const OutputComp = () => {
  const inputText = useSelector((store) => store.inputVal);
  return (
    <div style={{ textAlign: "center"}}>
      <h1>Here Is Your Output</h1>
      {
        inputText && <div style={{border:"1px solid black",width:"50%",margin:"auto",height:"auto",color:"teal", overflowX: "scroll"}}>
        <h1>{inputText}</h1>
      </div>
      }
    </div>
  );
};

export default OutputComp;

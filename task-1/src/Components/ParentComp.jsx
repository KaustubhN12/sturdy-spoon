import React from "react";
import InputComp from "./InputComp";
import OutputComp from "./OutputComp";

const ParentComp = () => {
  return (
    <div>
      <InputComp />
      <OutputComp />
    </div>
  );
};

export default ParentComp;

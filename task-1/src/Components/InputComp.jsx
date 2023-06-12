import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequestChange } from "../Redux/Action";

const InputComp = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(getRequestChange(e.target.value));
  };

  return (
    <div className="Container" style={{ textAlign: "center" }}>
      <h1>Type Input Here </h1>
      <input
        type="text"
        style={{ width: "50%", padding: "5px", fontSize: "25px" }}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputComp;

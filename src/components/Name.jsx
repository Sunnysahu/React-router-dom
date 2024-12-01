import React from "react";
import { useParams } from "react-router-dom";

useParams;
function Name() {
  const param = useParams();
  return (
    <>
      <div>This is Hello</div>
      <p>{param.name}</p>
    </>
  );
}

export default Name;

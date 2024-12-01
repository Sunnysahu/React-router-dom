import React from "react";

import Back from "./utils/Back";

function NotFound() {
  return (
    <div
      className="flex flex-auto justify-center items-center text-center
     mt-5 h-96"
    >
      <h1>
        No Page Found 404!!!
        <Back />
      </h1>
    </div>
  );
}

export default NotFound;

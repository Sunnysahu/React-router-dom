import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Profile() {
  const [username, setusername] = useState(null);
  const [temp, setTemp] = useState("");
  const [apiData, setApiData] = useState(" ");

  const navigate = useNavigate();

  const UserFound = () => {
    return (
      <div className="m-3 flex justify-center items-center flex-col text-center">
        <h3 className="text-sm">{temp}</h3>
        {temp && (
          <div className="flex flex-col">
            <h1>Username : {apiData.login}</h1>
            <h1>Name : {apiData.name}</h1>
            <h1>Bio : {apiData.bio}</h1>
            <h1>Location : {apiData.location}</h1>
            <button
              className="m-5 border border-black p-2 rounded-xl bg-gray-100 hover:text-orange-900 hover:bg-gray-200"
              onClick={() => {
                console.log("Navigating to:", username, `/profile/${username}`);
                console.log(apiData);

                navigate(`/profile/${username}`, { state: { apiData } });
                console.log("Clicked", username);

                // navigate("/profile");
              }}
            >
              Click Here to Info
            </button>
          </div>
        )}
      </div>
    );
  };

  const submithandler = async (e) => {
    e.preventDefault();

    if (username) {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        console.log(response.ok);

        if (!response.ok) {
          setusername("");
          setTemp(null);
          alert("UserName Not Found");
          navigate("/profile");
          return;
        }

        const data = await response.json();
        console.log(data);
        setApiData(data);

        console.log(apiData);

        setTemp("UserName Found");
      } catch (error) {}
    }
  };

  return (
    <div className="flex justify-center items-center mt-20 flex-col gap-6 w-full px-4">
      <label
        htmlFor="username"
        className="text-lg font-medium text-gray-800 w-full max-w-lg text-center"
      >
        Enter the Username
      </label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder={temp}
        onClickCapture={() => setTemp("")}
        className="shadow-lg shadow-red-600 border-2 border-black rounded-xl w-full max-w-72 text-center py-1.5 px-3
                   lg:shadow-green-600 sm:shadow-red-600 md:shadow-gray-700"
        onChange={(e) => {
          setusername(e.target.value);
        }}
        value={username}
      />
      <button
        onClick={submithandler}
        type="submit"
        className="border border-black m-5 py-2 px-4 rounded-lg hover:text-blue-600 text-sm"
      >
        Search
      </button>
      <div className="text-xl text-gray-700 w-full max-w-lg text-center">
        Here You can see the profiles
      </div>
      {/* <Outlet props={apiData} /> */}
      <UserFound />
    </div>
  );
}

export default Profile;

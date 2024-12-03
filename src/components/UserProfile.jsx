import React from "react";
import { useParams, useLocation } from "react-router-dom";

function UserProfile() {
  const location = useLocation();
  const { apiData } = location.state || {};
  const params = useParams();

  console.log(apiData);

  return (
    <div className=" p-3 flex justify-center">
      <div className=" flex flex-col justify-center text-center">
        <h1 className="p-3">This is {params.userId} Profile</h1>
        <h1>Avatar Image</h1>
        <img src={apiData.avatar_url} alt="" />
        <h1>Login : {apiData.login} </h1>
        <h1>Bio : {apiData.bio} </h1>

        <h1>location : {apiData.location}</h1>
        <h1>Following {apiData.following} </h1>
        <h1>View Type : {apiData.user_view_type} </h1>
        <h1>public_repos : {apiData.public_repos} </h1>
        <h1>Last Updated : {apiData.updated_at} </h1>

        <button
          onClick={() => {
            window.open(apiData?.html_url, "_blank");
          }}
          className="m-2 rounded-xl bg-gray-300 text-orange-900 border border-black p-2 mx-auto"
        >
          Click to Go to Github Profile
        </button>
      </div>
    </div>
  );
}

export default UserProfile;

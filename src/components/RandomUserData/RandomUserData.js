import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import RandomUserDataCard from "../RandomUserDataCard/RandomUserDataCard";
import "./RandomUserData.css";

const RandomUserData = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => setUserData(data.results));
  }, []);
  return (
    <div className="flex justify-center items-center ">
      <div className="p-36 border-blue-900 ">
        {userData.map((user, index) => (
          <RandomUserDataCard key={index} user={user}></RandomUserDataCard>
        ))}
      </div>
    </div>
  );
};

export default RandomUserData;

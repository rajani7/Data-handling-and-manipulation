import React, { Component } from "react";
import "./App.css";

export default function DataHandlingMap(props) {
  const { friendsData } = props;
  const genderFemale = { female: true };
  const genderMale = { male: true };

  const result = Map.groupBy(friendsData, ({ gender }) =>
    gender === "female" ? genderFemale : genderMale
  );
  console.log("result", result);

  return <div className="data-hand-mop-container">Data Handling using Map</div>;
}

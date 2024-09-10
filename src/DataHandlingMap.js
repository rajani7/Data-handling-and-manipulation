import React, { Component } from "react";
import "./App.css";

export default function DataHandlingMap(props) {
  const { friendsData } = props;
  const genderFemale = { female: true };
  const genderMale = { male: true };
  const dataOne = [
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
    ["e", 5],
    ["f", 6],
    ["g", 7],
  ];

  const resultOne = Map.groupBy(friendsData, ({ gender }) =>
    gender === "female" ? genderFemale : genderMale
  );
  console.log("Result One------", resultOne);

  //function to demonstrate filter when array of arrays 
  const resultTwo = new Map(dataOne.filter(([key, value]) => value < 5));
  console.log("Result Two------", resultTwo);

  //function to return the particular object, when array of array data structure is used 
  const resultThree = (a) => new Map(dataOne.filter(([key, value]) => a===key))
  console.log("Result Three------", resultThree('a'));

  return <div className="data-hand-mop-container"></div>;
}

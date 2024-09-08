import "./App.css";
import { useState } from "react";
import DataHandlingMap from "./DataHandlingMap";

function App() {
  const [value, setValue] = useState("joey");
  const friendsData = [
    { id: 0, name: "joey", quote: "How you doin?", gender: "male" },
    { id: 1, name: "ross", quote: "We were on a break", gender: "male" },
    { id: 2, name: "phoebe", quote: "She’s your lobster", gender: "female" },
    { id: 3, name: "monica", quote: "Damn the jellyfish!", gender: "female" },
    {
      id: 4,
      name: "chandler",
      quote: "I'm not great at advice",
      gender: "male",
    },
    {
      id: 5,
      name: "rachel",
      quote: "It’s a metaphor, Daddy.",
      gender: "female",
    },
  ];
  const options = [
    { value: "joey", label: "joey" },
    { value: "ross", label: "ross" },
    { value: "phoebe", label: "phoebe" },
    { value: "monica", label: "monica" },
    { value: "chandler", label: "chandler" },
    { value: "rachel", label: "rachel" },
  ];

  const handleButtonChange = () => {
    alert(`${value} is selected`);
  };

  //Function to return the particular object depending on name that is passed as parameter
  const returnObject = (name) => {
    const returnedValue = friendsData.filter((data) => {
      return data.name === name;
    });
    return returnedValue;
  };
  console.log("Object returned: ", returnObject("joey"));

  //To display friends data which is array of objects in list format
  return (
    <>
      <div className="App">
        <h2>Data Handling and Data Manipulation</h2>
        <div className="data-list">
          {friendsData.map((data) => (
            <div className="data-items" key={data.id}>
              {`${data.name} - ${data.quote} `}
            </div>
          ))}
        </div>
        <div className="dropdown-section">
          <select
            className="dropdown-list"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button
            className="dropdown-sec-btn"
            type="button"
            onClick={handleButtonChange}
          >
            Click Me
          </button>
        </div>
      </div>

      <DataHandlingMap friendsData={friendsData}></DataHandlingMap>
    </>
  );
}

export default App;

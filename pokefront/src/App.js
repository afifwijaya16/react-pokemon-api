import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      await axios.get("http://localhost:4000/list").then((response) => {
        // console.log(response);
        const result = response.data;
        setData(result);
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        <div className="row">
          {data.map((i, index) => {
            return (
              <div className="col-md-2" key={index}>
                <h1>{i.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;

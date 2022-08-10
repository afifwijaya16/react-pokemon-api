import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Home = () => {
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
    <div className="container">
      <div className="row">
        {data.map((i, index) => {
          return (
            <div className="col-sm-3 my-2" key={index}>
              <Card id={index} name={i.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      await axios.get("http://localhost:4000/list").then((response) => {
        // console.log(response);
        const result = response.data;
        setData(result);
        setLoading(false);
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
      {loading ? (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {data.map((i, index) => {
            return (
              <div className="col-sm-3 my-2" key={index}>
                <Card id={index + 1} name={i.name} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;

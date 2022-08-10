import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { detailId } = useParams();
  const [gambar, setGambar] = useState("");
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        await axios
          .get(`http://localhost:4000/detail/${detailId}`)
          .then((response) => {
            setLoading(false);
            setGambar(response.data.sprites.other.dream_world.front_default);
            setName(response.data.name);
            setWeight(response.data.weight);
            setHeight(response.data.height);
            // console.log(response);
          });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchDetail();
  }, [detailId]);

  return (
    <div className="container">
      <h5>Detail Pokemon</h5>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center ">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6">
            <img
              src={gambar}
              alt={`detail`}
              className="my-2 bg-danger p-2"
              style={{ height: "300px", width: "100%" }}
            />
          </div>
          <div className="col-md-6">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                name :<h4>{name}</h4>
              </li>
              <li className="list-group-item">
                weight :<h4>{weight}</h4>
              </li>
              <li className="list-group-item">
                height :<h4>{height}</h4>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;

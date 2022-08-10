import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Card = ({ id, name }) => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        await axios
          .get(`http://localhost:4000/detail/${id}`)
          .then((response) => {
            const result =
              response.data.sprites.other.dream_world.front_default;
            setDetail(result);
          });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchDetail();
  }, [id]);

  return (
    <div className="card p-2">
      <img
        src={detail}
        className="my-2 bg-danger p-2"
        alt={name}
        style={{ height: "300px", width: "100%" }}
      />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h4>{name}</h4>
          <Link to={`detail/${id}`}>Detail</Link>
        </li>
      </ul>
    </div>
  );
};

export default Card;

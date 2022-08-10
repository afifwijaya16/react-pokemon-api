import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = ({ id, name }) => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        await axios
          .get(`http://localhost:4000/detail/${id}`)
          .then((response) => {
            console.log(response.data.sprites.other.dream_world.front_default);
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
    <div className="card">
      <img src={detail} alt={name} height={50} width={100} />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
      </div>
    </div>
  );
};

export default Card;

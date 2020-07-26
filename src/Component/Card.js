import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { data } = props;
  return (
    <div className="grid">
      {data.map((id, index) => (
        <Link to={`/Image/${index}`}>
          <div className="article">
            <img
              src={id.urls.regular}
              className="article-img"
              alt="no pic loaded"
            />
            <div className="intro">
              <img
                src={id.user.profile_image.small}
                alt="NA"
                className="useravatar"
              />
              <h6 className="text">Image By</h6>
              <h6 className="naam"> {id.user.name} </h6>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;

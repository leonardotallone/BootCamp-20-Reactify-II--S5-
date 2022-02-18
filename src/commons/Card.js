import React from "react";

const Card = ({ dataCard }) => {
  // console.log("ALBUMS EN Card ---------------------->",dataCard.images[0].url)
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={dataCard.images[0].url} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <div className="media-content">
              <p className="title is-6"> {dataCard.name} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

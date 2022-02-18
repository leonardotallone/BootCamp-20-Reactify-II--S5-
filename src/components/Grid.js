import React from "react";
import Card from "../commons/Card";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Grid = ({ albums, playlists, artists }) => {
  const URL = useLocation().pathname;
  const word = URL.slice(1);
  let asd;
  if (word === "albums") {
    asd = albums;
  }
  if (word === "playlists") {
    asd = playlists;
  }
  if (word === "artists") {
    asd = artists;
  }
  return (
    <div className="columns is-multiline layout">
      <div className="column is-4">
        {asd.map((album) => (
          <Card dataCard={album} />
        ))}
      </div>
    </div>
  );
};


// {collection.map((data, i) => (
//     <div className="column is-4" key={i}>
//         <Link to={`/${type}/${data.id}`}>
//         <Card data={data} />
//         </Link>
//     </div>
// ))} 



export default Grid;




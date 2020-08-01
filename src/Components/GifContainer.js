import React, { useEffect, useState } from "react";
import GifGridItem from "./GifGridItem";
import { getGif } from "../Helpers/GetGif";

const GifContainer = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGif(category).then(setImages);
  }, [category]);

  const mostrar = () =>
    images.map((img) => <GifGridItem key={img.id} {...img} />);

  return (
    <>
      <h3>{category}</h3>
      <div className="GifGridContainer"> {mostrar()} </div>
    </>
  );
};

export default GifContainer;

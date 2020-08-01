import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifContainer from "./Components/GifContainer";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const mostrarCategories = () => categories.map((c) => <GifContainer  key = { c } category = {c} />);
  return (
    <>
      <h1>GifExpertApp</h1>
      <div className="sub"></div>
      <AddCategory setCategories={setCategories} />
      <div>{mostrarCategories()}</div>
    </>
  );
};

export default GifExpertApp;

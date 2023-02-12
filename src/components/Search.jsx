import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../features/filter/filterSlice";

const Search = () => {
  const dispatch = useDispatch();

  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={handleInput}
      />
    </form>
  );
};

export default Search;

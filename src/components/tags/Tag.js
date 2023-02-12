import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagSelected, tagRemoved } from "../../features/filter/filterSlice";

const Tag = ({ title }) => {
  const dispatch = useDispatch();

  const { tags: selectedTag } = useSelector((state) => state.filter);

  const isSelected = selectedTag.includes(title) ? true : false;

  // clickHandler
  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  // styling tags event
  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

  return (
    <div>
      <div className={style} onClick={handleSelect}>
        {title}
      </div>
    </div>
  );
};

export default Tag;

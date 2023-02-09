import React from "react";

const Tag = ({ title }) => {
  return (
    <div>
      <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
        {title}
      </div>
    </div>
  );
};

export default Tag;

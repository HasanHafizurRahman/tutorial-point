import React from "react";
import SingleVideo from "./SingleVideo";

const RelatedVideoList = ({ currentVideoId, tags }) => {
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      <SingleVideo />
    </div>
  );
};

export default RelatedVideoList;

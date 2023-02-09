import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const Reaction = () => {
  return (
    <div>
      <div className="flex gap-10 w-48">
        <div className="flex gap-1">
          <div className="shrink-0">
            <AiOutlineLike />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">100K</div>
        </div>
        <div className="flex gap-1">
          <div className="shrink-0">
            <AiOutlineDislike />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">100K</div>
        </div>
      </div>
    </div>
  );
};

export default Reaction;

import React from "react";
import RightCard from "./RightCard";
import "remixicon/fonts/remixicon.css";

const RightContent = ({ users }) => {
  return (
    <div className="w-2/3 h-full overflow-hidden rounded-4xl">
      <div className="flex gap-10 animate-scroll w-max">
        {[...users, ...users].map((user, idx) => (
          <RightCard
            key={idx}
            id={idx}
            img={user.img}
            color={user.color}
            tag={user.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default RightContent;
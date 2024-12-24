import React from "react";
import AddReaction from "./components/AddReaction";

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-[50vw]">
        <hr className="border-t-2 border-gray-600 w-full my-4" />
        <AddReaction />
        <hr className="border-t-2 border-gray-600 w-full my-4" />
      </div>
    </div>
  );
};

export default page;

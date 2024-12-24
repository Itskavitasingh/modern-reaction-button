import React, { FC } from "react";

interface ChipProps {
  emoji: string;
  count: number;
}
const Chip: FC<ChipProps> = ({ emoji, count }) => {
  return (
    <div className="flex items-center gap-2 bg-gray-800 text-white text-sm px-3 py-1 rounded-full shadow-md">
      <span className="text-lg">{emoji}</span>
      <span>{count}</span>
    </div>
  ); 
};

export default Chip;

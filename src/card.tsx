import React from "react";
import Svg from "./svg";
import { twMerge } from "tailwind-merge";

const Card: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={twMerge("flex flex-col py-4 px-4 shadow-lg", className)}>
      <span className="text-xl font-semibold">Supervisor</span>
      <p className="text-sm">
        Monitors activity to identify project roadblocks
      </p>
      <div className="flex w-full justify-end">
        <Svg />
      </div>
    </div>
  );
};

export default Card;

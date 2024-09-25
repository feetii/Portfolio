import React, { ReactNode } from "react";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position?: string; // Ensure this matches one of the defined types
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses = "", // Provide a default value for optional prop
}) => {
  return (
    <button
      className={`w-full relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10`}
      onClick={handleClick}
      // Ensure the style matches the expected value for position
      // or handle the position in a different way if needed
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#675d72_0%,#8a8be4_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center
           justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium
            text-white backdrop-blur-3xl gap-3 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;

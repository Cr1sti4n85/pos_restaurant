import { FC } from "react";
import { MiniCardProps } from "../../types";

const MiniCard: FC<MiniCardProps> = ({ title, icon, number, footerNum }) => {
  return (
    <div className="bg-[#1a1a1a] py-5 px-5 rounded-lg w-[50%]">
      <div className="flex items-start justify-between">
        <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
          {title}
        </h1>
        <button
          className={`${title === "Total Earnings" ? "bg-[#02ca3a]" : "bg-[#f6b100]"} 
          p-3 rounded-lg text-[#f5f5f5] text-2xl`}
        >
          {icon}
        </button>
      </div>
      <div>
        <h1 className="text-[#f5f5f5] text-4xl font-bold mt-4">
          {title === "Total Earnings" ? `$${number}` : number}
        </h1>
        <h1 className="text-[#f5f5f5] text-lg mt-2">
          <span className="text-[#02ca3a]">{footerNum}</span> más que ayer
        </h1>
      </div>
    </div>
  );
};
export default MiniCard;

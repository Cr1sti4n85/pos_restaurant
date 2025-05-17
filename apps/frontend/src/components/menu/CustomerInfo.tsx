import { FC } from "react";
import { useClientStore } from "../../store/useClientStore";
import { getInitials } from "../../utils/getInitials";

const CustomerInfo: FC = () => {
  const { name, orderId } = useClientStore();

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex flex-col items-start">
        <h1 className="text-md text-[#f5f5f5] font-semibold tracking-wide">
          {name}
        </h1>
        <p className="text-xs text-[#ababab] font-medium mt-1">
          #{orderId} / Para servir
        </p>
        <p className="text-sx text-[#ababab] font-medium mt-2">
          Junio 2025, 14:00 PM
        </p>
      </div>
      <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
        {getInitials(name)}
      </button>
    </div>
  );
};
export default CustomerInfo;

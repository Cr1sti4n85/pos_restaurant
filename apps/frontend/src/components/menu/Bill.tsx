import { FC } from "react";
import { useCartStore } from "../../store/useCartStore";
import { calculateTax } from "../../utils/calculateTax";

const Bill: FC = () => {
  const { getTotalPrice, cart } = useCartStore();
  const total = getTotalPrice();

  const totalWithTax = calculateTax(total);

  return (
    <>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-[#ababab] font-medium mt-2">
          Items({cart.length})
        </p>
        <h1 className="text-[#f5f5f5] text-md font-bold">${total}</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-[#ababab] font-medium mt-2">
          Total con IVA(19%)
        </p>
        <h1 className="text-[#f5f5f5] text-md font-bold">${totalWithTax}</h1>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button
          className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab]
        font-semibold"
        >
          Cash
        </button>
        <button
          className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab]
        font-semibold"
        >
          Online
        </button>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button
          className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5]
        font-semibold text-lg"
        >
          Print Receipt
        </button>
        <button
          className="bg-[#f5b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f]
        font-semibold text-lg"
        >
          Place Order
        </button>
      </div>
    </>
  );
};
export default Bill;

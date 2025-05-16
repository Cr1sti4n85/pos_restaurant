import { FC, useEffect, useState } from "react";
import { SelectedMenuProps } from "../../types";
import { FaShoppingCart } from "react-icons/fa";

const SelectedMenu: FC<SelectedMenuProps> = ({ menu }) => {
  const [itemCount, setItemCount] = useState<number>(0);

  useEffect(() => {
    setItemCount(0);
  }, [menu]);

  const increment = (): void => {
    if (itemCount >= 3) return;
    setItemCount(itemCount + 1);
  };
  const decrement = (): void => {
    if (itemCount <= 0) return;
    setItemCount(itemCount - 1);
  };
  return (
    <div
      key={menu.id}
      className="flex flex-col items-start justify-between p-4 rounded-lg
            h-[150px] cursor-pointer bg-[#1a1a1a] hover:bg-[#2a2a2a]"
    >
      <div className="flex items-start justify-between w-full">
        <h1 className="text-[#f5f5f5] text-lg font-semibold">{menu.name}</h1>
        <button className="bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg cursor-pointer">
          <FaShoppingCart size={20} />
        </button>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-[#f5f5f5] text-xl font-bold">${menu.price}</p>
        <div
          className="flex items-center justify-between bg-[#1f1f1f] px-4
            py-3 rounded-lg gap-6"
        >
          <button
            onClick={() => decrement()}
            className="text-yellow-500 text-2xl"
          >
            &minus;
          </button>
          <span className="text-white">{itemCount}</span>
          <button
            onClick={() => increment()}
            className="text-yellow-500 text-2xl"
          >
            &#43;
          </button>
        </div>
      </div>
    </div>
  );
};
export default SelectedMenu;

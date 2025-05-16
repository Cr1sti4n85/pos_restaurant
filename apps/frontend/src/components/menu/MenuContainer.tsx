import { GrRadialSelected } from "react-icons/gr";
import { menus } from "../../constants/menu";
import { useState } from "react";
import { Menus } from "../../types";
import SelectedMenu from "./SelectedMenu";

const MenuContainer = () => {
  const [selected, setSelected] = useState<Menus>(menus[0]);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="flex flex-col items-start justify-between p-4 rounded-lg
            h-[100px] cursor-pointer"
            style={{ backgroundColor: menu.bgColor }}
            onClick={() => {
              setSelected(menu);
            }}
          >
            <div className="flex items-center justify-between w-full">
              <h1 className="text-[#f5f5f5] text-lg font-semibold">
                {menu.icon} {menu.name}
              </h1>
              {selected.id === menu.id && (
                <GrRadialSelected className="text-white" size={20} />
              )}
            </div>
            <p className="text-[#ababab] text-sm font-semibold">
              {menu.items.length} items
            </p>
          </div>
        ))}
      </div>
      <hr className="border-[#2a2a2a] border-t-2 mt-4" />
      <div>
        <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
          {selected?.items.map((menu) => (
            <SelectedMenu key={menu.id} menu={menu} />
          ))}
        </div>
      </div>
    </>
  );
};
export default MenuContainer;

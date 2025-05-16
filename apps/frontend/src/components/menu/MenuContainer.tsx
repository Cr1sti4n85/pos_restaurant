import { GrRadialSelected } from "react-icons/gr";
import { menus } from "../../constants/menu";
import { getHexColor } from "../../utils/getBgColor";

const MenuContainer = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="flex flex-col items-start justify-between p-4 rounded-lg
            h-[100px] cursor-pointer"
            style={{ backgroundColor: getHexColor() }}
          >
            <div className="flex items-center justify-between w-full">
              <h1 className="text-[#f5f5f5] text-lg font-semibold">
                {menu.icon} {menu.name}
              </h1>
              <GrRadialSelected className="text-white" size={20} />
            </div>
            <p className="text-[#ababab] text-sm font-semibold">
              {menu.items.length} items
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
export default MenuContainer;

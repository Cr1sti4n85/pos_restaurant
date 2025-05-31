import { FC } from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";
import CustomerInfo from "../components/menu/CustomerInfo";
import CartInfo from "../components/menu/CartInfo";
import Bill from "../components/menu/Bill";
import { useClientStore } from "../store/useClientStore";

const Menu: FC = () => {
  const { name, table } = useClientStore();

  return (
    <section className="bg-[#1f1f1f] flex gap-3 h-[calc(100vh-5.75rem)] overflow-hidden">
      {/*LEFT DIV */}
      <div className="flex-[3] ">
        <div className="flex items-center justify-between px-10 py-4 mt-2">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
              Menú
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <MdRestaurantMenu className="text-[#f5f5f5] text-4xl" />
              <div className="flex flex-col items-start">
                <h1 className="text-md text-[#f5f5f5] font-semibold">{name}</h1>
                <p className="text-xs text-[#ababab] font-medium">
                  Mesa: {table?.tableNo}
                </p>
              </div>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>
      {/*RIGHT DIV */}
      <div className="flex-[1] bg-[#1a1a1a] mt-4 rounded-lg pt-2">
        {/* Customer info */}
        <CustomerInfo />
        <hr className="border-[#2a2a2a] border-t-2" />
        {/* Cart items */}
        <CartInfo />
        <hr className="border-[#2a2a2a] border-t-2" />

        {/* Bills */}
        <Bill />
      </div>

      <BottomNav />
    </section>
  );
};
export default Menu;

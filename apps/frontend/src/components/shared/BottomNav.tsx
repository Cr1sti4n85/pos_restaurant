import { FC } from "react";
import { useNavigate } from "react-router";
import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";

const BottomNav: FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 
    flex justify-around"
    >
      <button
        onClick={() => navigate("/")}
        className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px]
      rounded-[20px]"
      >
        <FaHome className="inline mr-3}" size={30} /> <p>Home</p>
      </button>
      <button
        onClick={() => navigate("/orders")}
        className="flex items-center justify-center text-[#ababab] w-[200px]"
      >
        <MdOutlineReorder className="inline mr-3}" size={30} /> <p>Órdenes</p>
      </button>
      <button
        onClick={() => navigate("/tables")}
        className="flex items-center justify-center text-[#ababab] w-[200px]"
      >
        <MdTableBar className="inline mr-3}" size={30} /> <p>Mesas</p>
      </button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]">
        <CiCircleMore className="inline mr-3}" size={30} /> <p>Más</p>
      </button>

      <button className="absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center">
        <BiSolidDish size={30} />
      </button>
    </div>
  );
};
export default BottomNav;

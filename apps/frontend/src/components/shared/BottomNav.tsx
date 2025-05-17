import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import Modal from "./Modal";

const BottomNav: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [guestCount, setGuestCount] = useState<number>(0);
  const openModal = (): void => setIsModalOpen(true);
  const closeModal = (): void => setIsModalOpen(false);

  const increment = (): void => {
    if (guestCount >= 6) return;
    setGuestCount(guestCount + 1);
  };
  const decrement = (): void => {
    if (guestCount <= 0) return;
    setGuestCount(guestCount - 1);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 
    flex justify-around"
    >
      <button
        onClick={() => navigate("/")}
        className={`flex items-center justify-center font-bold ${
          isActive("/") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"
        } w-[300px] rounded-[20px]`}
      >
        <FaHome className="inline mr-3}" size={30} /> <p>Home</p>
      </button>
      <button
        onClick={() => navigate("/orders")}
        className={`flex items-center justify-center font-bold ${
          isActive("/orders") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"
        } w-[300px] rounded-[20px]`}
      >
        <MdOutlineReorder className="inline mr-3}" size={30} /> <p>Órdenes</p>
      </button>
      <button
        onClick={() => navigate("/tables")}
        className={`flex items-center justify-center font-bold ${
          isActive("/tables") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"
        } w-[300px] rounded-[20px]`}
      >
        <MdTableBar className="inline mr-3}" size={30} /> <p>Mesas</p>
      </button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]">
        <CiCircleMore className="inline mr-3}" size={30} /> <p>Más</p>
      </button>

      <button
        disabled={isActive("/tables") || isActive("/menu")}
        onClick={openModal}
        className="absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center"
      >
        <BiSolidDish size={30} />
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={"Create Order"}>
        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Nombre del cliente
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input
              type="text"
              name=""
              placeholder="Ingresa el nombre del cliente"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
            Número teléfono del cliente
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input
              type="number"
              name=""
              placeholder="+56988776655"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 mt-3 text-sm font-medium text-[#ababab]">
            Invitado
          </label>
          <div
            className="flex items-center justify-between bg-[#1f1f1f] px-4
            py-3 rounded-lg"
          >
            <button onClick={decrement} className="text-yellow-500 text-2xl">
              &minus;
            </button>
            <span className="text-white">{guestCount} Personas</span>
            <button onClick={increment} className="text-yellow-500 text-2xl">
              &#43;
            </button>
          </div>
        </div>
        <button
          onClick={() => navigate("/tables")}
          className="w-full bg-[#f6B100] text-[#f5f5f5] 
        rounded-lg py-3 mt-8 hover:bg-yellow-700"
        >
          Registrar orden
        </button>
      </Modal>
    </div>
  );
};
export default BottomNav;

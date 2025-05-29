import React, { FC } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

type ModalProps = {
  setIsTableModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: FC<ModalProps> = ({ setIsTableModalOpen }) => {
  const handleCloseModal = () => {
    setIsTableModalOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fondo oscuro con opacidad */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleCloseModal}
      ></div>

      {/* Contenido del modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative z-10 bg-[#262626] p-6 rounded-lg shadow-lg w-96"
      >
        {/*Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#f5f5f5] text-xl font-semibold">Añadir mesa</h2>
          <button
            onClick={handleCloseModal}
            className="text-[#f5f5f5] hover:text-red-500"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {/*Modal body */}

        <form className="space-y-4 mt-10">
          <div>
            <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
              Número de mesa
            </label>
            <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
              <input
                type="number"
                name="tableNo"
                // onChange={""}
                value={""}
                placeholder="Ingresa el número de la mesa"
                className="bg-transparent flex-1 text-white focus:outline-none"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
              Cantidad de asientos
            </label>
            <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
              <input
                type="number"
                name="seats"
                // onChange={""}
                value={""}
                placeholder="Ingresa cantidad de asientos"
                className="bg-transparent flex-1 text-white focus:outline-none"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold"
          >
            Añadir mesa
          </button>
        </form>
      </motion.div>
    </div>
  );
};
export default Modal;

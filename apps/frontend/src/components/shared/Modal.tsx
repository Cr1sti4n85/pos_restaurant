import { FC } from "react";
import { ModalProps } from "../../types";

const Modal: FC<ModalProps> = ({ title, onClose, isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] shadow-lg w-full rounded-lg p-4 max-w-lg">
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#333]">
          <h2 className="text-xl text-[#f5f5f5] font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-2xl hover:text-gray-300"
          >
            &times;
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};
export default Modal;

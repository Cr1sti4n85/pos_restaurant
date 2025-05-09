import { FC } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const BackButton: FC = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-[#025cca] p-3 text-xl font-bold rounded-full text-white"
    >
      <IoArrowBackOutline />
    </button>
  );
};
export default BackButton;

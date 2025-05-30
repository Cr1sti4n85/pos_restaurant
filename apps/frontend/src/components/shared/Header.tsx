import { FaSearch, FaUserCircle, FaBell } from "react-icons/fa";
import logo from "../../assets/imgs/logo.png";
import { IoLogOut } from "react-icons/io5";
import { useLogoutUser } from "../../hooks/user/useLogoutUser";
import { MdDashboard } from "react-icons/md";
import { EmployeeRole } from "../../types.d";
import useAuth from "../../hooks/user/useAuth";
import { useNavigate } from "react-router";

const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { signout } = useLogoutUser();
  const handleLogout = () => {
    signout();
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className="h-8 w-8" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
      </div>
      {/*SEARCH */}
      <div
        className="flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-5
      py-2 w-[500px]"
      >
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="Buscar"
          className="bg-[#1f1f1f] outline-none text-[#f5f5f5] px-2 py-1 rounded-md"
        />
      </div>
      {/*logged user details */}
      <div className="flex items-center gap-4">
        {user && user.role === EmployeeRole.ADMIN && (
          <div
            onClick={() => navigate("/dashboard")}
            className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer"
          >
            <MdDashboard className="text-[#f5f5f5] text-2xl" />
          </div>
        )}

        <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#f5f5f5] text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#f5f5f5] font-semibold">
              {(user && user.name) || "Anónimo"}
            </h1>
            <p className="text-xs text-[#ababab] font-medium">
              {(user && user.role) || "N/A"}
            </p>
          </div>
          <IoLogOut
            onClick={handleLogout}
            className="text-[#f5f5f5] ml-2"
            size={40}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;

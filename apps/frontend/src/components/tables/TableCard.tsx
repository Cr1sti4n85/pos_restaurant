import { FC } from "react";
import { getHexColor } from "../../utils/getBgColor";
import { useNavigate } from "react-router";
import { useClientStore } from "../../store/useClientStore";
import { getInitials } from "../../utils/getInitials";
import { Table } from "../../types";

type TableCardProps = {
  id: string;
  tableNo: string;
  status: string;
  seats: number;
  name: string;
};

const TableCard: FC<TableCardProps> = ({
  id,
  tableNo,
  status,
  seats,
  name,
}) => {
  const navigate = useNavigate();
  const { updateTable } = useClientStore();
  const handleClick = (name: string) => {
    if (status === "Reservada") return;
    const table: Table = {
      tableId: id,
      tableNo: name,
    };
    updateTable(table);
    localStorage.setItem("table", JSON.stringify(table));
    navigate("/menu");
  };

  return (
    <div
      onClick={() => handleClick(tableNo)}
      className="w-[300px] bg-[#262626] hover:bg-[#2c2c2c] p-4 rounded-lg cursor-pointer"
    >
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">Mesa {tableNo}</h1>
        <p
          className={`${
            status === "Reservada"
              ? "text-green-600 bg-[#2e4a40]"
              : "bg-[#664a04] text-white"
          } px-2  py-1 rounded-lg`}
        >
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center mt-5 mb-7">
        <h1
          className=" text-white rounded-full p-5 text-xl"
          style={{ backgroundColor: name ? getHexColor() : "#1f1f1f" }}
        >
          {getInitials(name) || "N/A"}
        </h1>
      </div>
      <p className="text-[#ababab] text-xs">
        Asientos: <span className="text-[#f5f5f5]">{seats}</span>
      </p>
    </div>
  );
};
export default TableCard;

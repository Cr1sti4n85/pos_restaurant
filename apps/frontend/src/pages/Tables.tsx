import { FC, useState } from "react";
import BackButton from "../components/shared/BackButton";
import BottomNav from "../components/shared/BottomNav";
import TableCard from "../components/tables/TableCard";
import useTables from "../hooks/table/useTables";
import { enqueueSnackbar } from "notistack";

const Tables: FC = () => {
  const [status, setStatus] = useState<string>("all");

  const { tablesData, isError } = useTables();

  if (isError) {
    enqueueSnackbar("Ocurrió un error", { variant: "error" });
  }

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4 mt-2">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
            Mesas
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-[#ababab] text-lg 
            ${status === "all" && "bg-[#383838] rounded-lg "}
           font-semibold px-5 py-2`}
          >
            Todas
          </button>
          <button
            onClick={() => setStatus("booked")}
            className={`text-[#ababab] text-lg 
            ${status === "booked" && "bg-[#383838] rounded-lg "}
           font-semibold px-5 py-2`}
          >
            Reservadas
          </button>
        </div>
      </div>
      <div className="scroll flex flex-wrap gap-5 px-10 py-5 overflow-y-scroll h-[500px]">
        {tablesData?.map((table) => (
          <TableCard
            key={table._id}
            id={table._id}
            tableNo={table.tableNo}
            status={table.status}
            seats={+table.seats}
            name={table.currentOrder?.customer.name}
          />
        ))}
      </div>
      <BottomNav />
    </section>
  );
};
export default Tables;

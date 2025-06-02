import { FC, useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";
import useOrders from "../hooks/order/useOrders";
import PageLoader from "../components/shared/PageLoader";
import { enqueueSnackbar } from "notistack";

const Orders: FC = () => {
  const [status, setStatus] = useState("all");

  const { ordersData, isError, isLoading } = useOrders();

  if (isLoading) {
    return <PageLoader />;
  }

  if (isError) {
    enqueueSnackbar("Hubo un error al cargar los datos", { variant: "error" });
  }

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4 mt-2">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
            Ordenes
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
            onClick={() => setStatus("progress")}
            className={`text-[#ababab] text-lg 
            ${status === "progress" && "bg-[#383838] rounded-lg "}
           font-semibold px-5 py-2`}
          >
            En proceso
          </button>
          <button
            onClick={() => setStatus("ready")}
            className={`text-[#ababab] text-lg 
            ${status === "ready" && "bg-[#383838] rounded-lg"}
           font-semibold px-5 py-2`}
          >
            Listas
          </button>
          <button
            onClick={() => setStatus("completed")}
            className={`text-[#ababab] text-lg 
            ${status === "completed" && "bg-[#383838] rounded-lg"}
           font-semibold px-5 py-2`}
          >
            Entregadas
          </button>
        </div>
      </div>
      <div className="scroll flex flex-wrap justify-start gap-2 px-16 py-4 pb-4 overflow-y-scroll ">
        {ordersData && ordersData?.length > 0 ? (
          ordersData?.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))
        ) : (
          <p className="col-span-3 text-gray-500">
            No hay órdenes confirmadas por el momento
          </p>
        )}
      </div>
      <BottomNav />
    </section>
  );
};
export default Orders;

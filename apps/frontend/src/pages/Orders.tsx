import { FC } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";

const Orders: FC = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4 mt-2">
        <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
          Ordenes
        </h1>
        <div className="flex items-center justify-around gap-4">
          <button
            className="text-[#ababab] text-lg 
          rounded-lg px-5 py-2 font-semibold"
          >
            Todas
          </button>
          <button
            className="text-[#ababab] text-lg bg-[#383838]
          rounded-lg px-5 py-2 font-semibold"
          >
            En proceso
          </button>
          <button
            className="text-[#ababab] text-lg 
          rounded-lg px-5 py-2 font-semibold"
          >
            Listas
          </button>
          <button
            className="text-[#ababab] text-lg 
          rounded-lg px-5 py-2 font-semibold"
          >
            Entregadas
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 px-16 py-4 overflow-y-scroll h-[calc(100vh-5rem-7rem)]">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
      <BottomNav />
    </section>
  );
};
export default Orders;

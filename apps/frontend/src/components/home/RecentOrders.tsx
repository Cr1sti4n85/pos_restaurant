import { FC } from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";
import useOrders from "../../hooks/order/useOrders";

const RecentOrders: FC = () => {
  const { ordersData } = useOrders();

  return (
    <div className="px-8 mt-6">
      <div className="bg-[#1a1a1a] w-full rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Órdenes recientes
          </h1>
          <a href="" className="text-[#025cca] text-sm font-semibold">
            Ver todas
          </a>
        </div>

        <div
          className="flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-6
            py-4 mx-6"
        >
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Buscar órdenes recientes"
            className="bg-[#1f1f1f] outline-none text-[#f5f5f5] px-2 py-1 rounded-md"
          />
        </div>
        {/*Order list */}
        <div className=" scroll mt-4 px-6 pb-2 gap-2 overflow-y-scroll h-[120px]">
          {ordersData && ordersData?.length > 0 ? (
            ordersData?.map((order) => (
              <OrderList key={order._id} order={order} />
            ))
          ) : (
            <p className="col-span-3 text-gray-500">
              No hay órdenes confirmadas por el momento
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default RecentOrders;

import { FC } from "react";
import { formatDateAndTime } from "../../utils/formatDateTime";
import { GrUpdate } from "react-icons/gr";
import useOrders from "../../hooks/order/useOrders";
import { OrderStatus } from "../../types.d";
import { useUpdateOrder } from "../../hooks/order/useUpdateOrder";

const RecentOrders: FC = () => {
  const { ordersData } = useOrders();
  const { updateOrder } = useUpdateOrder();
  const handleStatusChange = (orderStatus: OrderStatus, orderId: string) => {
    console.log(orderStatus);
    updateOrder({ data: orderStatus, id: orderId });
  };
  return (
    <div className="container mx-auto bg-[#262626] p-4 rounded-lg">
      <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">
        Recent Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[#f5f5f5]">
          <thead className="bg-[#333] text-[#ababab]">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date & Time</th>
              <th className="p-3">Items</th>
              <th className="p-3">Table No</th>
              <th className="p-3">Total</th>
              <th className="p-3 text-center">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {ordersData?.map((order, index) => (
              <tr
                key={index}
                className="border-b border-gray-600 hover:bg-[#333]"
              >
                <td className="p-4">#{order._id.substring(16)}</td>
                <td className="p-4">{order.customer.name}</td>
                <td className="p-4">
                  <select
                    className={`bg-[#1a1a1a] text-[#f5f5f5] border border-gray-500 p-2 rounded-lg focus:outline-none ${
                      order.orderStatus === OrderStatus.READY
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                    value={order.orderStatus}
                    onChange={(e) => {
                      handleStatusChange(
                        e.target.value as OrderStatus,
                        order._id
                      );
                    }}
                  >
                    <option className="text-yellow-500" value="progress">
                      In Progress
                    </option>
                    <option className="text-green-500" value="ready">
                      Ready
                    </option>
                  </select>
                </td>
                <td className="p-4">
                  {formatDateAndTime(order.orderDate.toString())}
                </td>
                <td className="p-4">{order.items.length} Items</td>
                <td className="p-4">Table - {order.table.tableNo}</td>
                <td className="p-4">${order.bill.totalWithTax}</td>
                <td className="p-4 flex justify-center">
                  <button className="text-blue-400 hover:text-blue-500 ">
                    <GrUpdate size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default RecentOrders;

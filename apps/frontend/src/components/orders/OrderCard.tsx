import { FC } from "react";
import { FaCheckDouble, FaCircle, FaLongArrowAltRight } from "react-icons/fa";
import { OrderProps, OrderStatus } from "../../types.d";
import { getInitials } from "../../utils/getInitials";
import { formatDateAndTime } from "../../utils/formatDateTime";

const OrderCard: FC<OrderProps> = ({ order }) => {
  console.log(order);

  return (
    <div className="w-[400px] bg-[#262626] p-4 rounded-lg mb-4">
      <div className="flex items-center gap-5">
        <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
          {getInitials(order.customer.name)}
        </button>
        <div className="flex items-center justify-between w-[100%] gap-6">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
              {order.customer.name}
            </h1>
            <p className="text-[#ababab] text-sm">
              #{order._id.substring(16)}/ Para llevar
            </p>
            <p className="text-[#ababab] text-sm">
              Mesa{" "}
              <FaLongArrowAltRight className="text-[#ababab] ml-2 inline" />{" "}
              {order.table.tableNo}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {order.orderStatus === OrderStatus.READY ? (
              <>
                <p className=" text-green-600 bg-[#2e4a40] px-2  py-1 rounded-lg">
                  <FaCheckDouble className="inline mr-2" />
                  {order.orderStatus}
                </p>
                <p className="text-[#ababab] text-sm">
                  <FaCircle className="inline mr-2 text-green-600" /> Listo para
                  servir
                </p>
              </>
            ) : (
              <>
                <p className=" text-yellow-600 bg-[#4a452e] px-2  py-1 rounded-lg">
                  <FaCircle className="inline mr-2" />
                  {order.orderStatus}
                </p>
                <p className="text-[#ababab] text-sm">
                  <FaCircle className="inline mr-2 text-yellow-600" />
                  En Preparación
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 text-[#ababab]">
        <p>{formatDateAndTime(order.orderDate.toString())}</p>
        <p>{order.items.length} items</p>
      </div>
      <hr className="border-t-1 border-gray-500 w-full mt-4" />
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-[#f5f5f5] text-lg font-semibold">Total</h1>
        <p className="text-[#f5f5f5] text-lg font-semibold">
          ${order.bill.totalWithTax}
        </p>
      </div>
    </div>
  );
};
export default OrderCard;

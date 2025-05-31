import { FC, useState } from "react";
import { useCartStore } from "../../store/useCartStore";
import { calculateTax } from "../../utils/calculateTax";
import { enqueueSnackbar } from "notistack";
import { useClientStore } from "../../store/useClientStore";
import { IPlaceOrder, OrderStatus } from "../../types.d";

const Bill: FC = () => {
  const { getTotalPrice, cart } = useCartStore();
  const total = getTotalPrice();
  const totalWithTax = calculateTax(total);

  const { name, phone, guests, table } = useClientStore();

  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      enqueueSnackbar("Por favor, selecciona un método de pago", {
        variant: "warning",
      });
      return;
    }

    const orderData: IPlaceOrder = {
      customer: {
        name,
        phone,
        guests,
      },
      orderStatus: OrderStatus.PROGRESS,
      bill: {
        total,
        totalWithTax,
        tax: totalWithTax - total,
      },
      items: cart,
      table: table?.tableId as string,
    };
  };

  return (
    <>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-[#ababab] font-medium mt-2">
          Items({cart.length})
        </p>
        <h1 className="text-[#f5f5f5] text-md font-bold">${total}</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-[#ababab] font-medium mt-2">
          Total con IVA(19%)
        </p>
        <h1 className="text-[#f5f5f5] text-md font-bold">${totalWithTax}</h1>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button
          onClick={() => setPaymentMethod("Efectivo")}
          className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold ${paymentMethod === "Efectivo" ? "bg-[#383737]" : ""}`}
        >
          Efectivo
        </button>
        <button
          onClick={() => setPaymentMethod("Tarjeta")}
          className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab]
        font-semibold ${paymentMethod === "Tarjeta" ? "bg-[#383737]" : ""}`}
        >
          Tarjeta
        </button>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button
          className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5]
        font-semibold text-lg"
        >
          Imprimir boleta
        </button>
        <button
          onClick={handlePlaceOrder}
          className="bg-[#f5b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f]
        font-semibold text-lg"
        >
          Confirmar orden
        </button>
      </div>
    </>
  );
};
export default Bill;

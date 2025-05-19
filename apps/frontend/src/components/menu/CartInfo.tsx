import { FC, useEffect, useRef } from "react";
import { FaNotesMedical } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useCartStore } from "../../store/useCartStore";

const CartInfo: FC = () => {
  const { cart, removeItems } = useCartStore();

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [cart]);

  const handleRemove = (id: string) => {
    removeItems(id);
  };

  return (
    <div className="px-4 py-2">
      <h1 className="text-[#e4e4e4] text-lg font-semibold tracking-wide">
        Detalle de la orden
      </h1>
      <div className="scroll mt-4 overflow-y-scroll h-[150px]" ref={scrollRef}>
        {cart.length === 0 ? (
          <p
            className="text-[#ababab] text-sm flex justify-center 
          items-center h-[150px]"
          >
            No hay articulos actualmente
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2"
            >
              <div className="flex items-center justify-between">
                <h1 className="text-[#ababab] font-semibold tracking-wide text-md">
                  {item.itemName}
                </h1>
                <p className="text-[#ababab] font-semibold">x{item.quantity}</p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  <RiDeleteBin2Fill
                    onClick={() => handleRemove(item.id)}
                    className="text-[#ababab] cursor-pointer"
                    size={20}
                  />
                  <FaNotesMedical
                    className="text-[#ababab] cursor-pointer"
                    size={20}
                  />
                </div>
                <p className="text-[#f5f5f5] text-md font-bold">
                  ${item.price}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default CartInfo;

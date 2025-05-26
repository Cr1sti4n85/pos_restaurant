import { FC, useState, useEffect } from "react";
import { formatDate, formatTime } from "../../utils/formatDateTime";
import { useUserStore } from "../../store/useUserStore";

const Greetings: FC = () => {
  const [dateTime, setDatetime] = useState<Date>(new Date());
  const { name } = useUserStore();
  useEffect(() => {
    const timer = setInterval(() => setDatetime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-between items-center px-8 mt-5">
      <div>
        <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wide">
          Buenos días, {name.split(" ")[0]}
        </h1>
        <p className="text-[#ababab] text-sm">
          Brinda el mejor servicio a los clientes
        </p>
      </div>
      <div>
        <h1 className="text-[#f5f5f5] text-3xl font-bold tracking-wide w-[130px]">
          {formatTime(dateTime)}
        </h1>
        <p className="text-[#ababab] text-sm">{formatDate(dateTime)}</p>
      </div>
    </div>
  );
};
export default Greetings;

import {
  keepPreviousData,
  QueryOptions,
  useQuery,
} from "@tanstack/react-query";
import { getOrders } from "../../http/apiRequests";
import { IReturnedOrdersData } from "../../types";

const useOrders = (opts: QueryOptions<IReturnedOrdersData[]> = {}) => {
  const { data: ordersData, ...rest } = useQuery<IReturnedOrdersData[]>({
    queryKey: ["orders"],
    queryFn: getOrders,
    placeholderData: keepPreviousData,

    ...opts,
  });

  return { ordersData, ...rest };
};

export default useOrders;

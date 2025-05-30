import {
  keepPreviousData,
  QueryOptions,
  useQuery,
} from "@tanstack/react-query";
import { getTables } from "../../http/apiRequests";
import { ITableData } from "../../types";

const useTables = (opts: QueryOptions<ITableData[]> = {}) => {
  const { data: tablesData, ...rest } = useQuery<ITableData[]>({
    queryKey: ["tables"],
    queryFn: getTables,
    placeholderData: keepPreviousData,
    ...opts,
  });

  return { tablesData, ...rest };
};

export default useTables;

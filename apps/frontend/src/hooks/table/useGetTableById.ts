import {
  keepPreviousData,
  QueryOptions,
  useQuery,
} from "@tanstack/react-query";
import { getOneTable } from "../../http/apiRequests";
import { IReturnedTable } from "../../types.d";

const useGetTableById = (
  opts: QueryOptions<IReturnedTable> = {},
  id: string
) => {
  const { data: tableData, ...rest } = useQuery<IReturnedTable>({
    queryKey: ["table", id],
    queryFn: async () => await getOneTable(id),
    placeholderData: keepPreviousData,
    ...opts,
  });

  return { tableData, ...rest };
};

export default useGetTableById;

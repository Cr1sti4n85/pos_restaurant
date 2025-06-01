import { enqueueSnackbar } from "notistack";
import { IOrderData, TableStatus } from "../../types.d";
import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../../http/apiRequests";
import { useUpdateTable } from "../table/useUpdateTable";

export const usePlaceOrder = (order: IOrderData) => {
  const { customer, orderStatus, bill, items, table } = order;
  const { updateTableData } = useUpdateTable();

  const { mutate: placeOrder, ...rest } = useMutation({
    mutationFn: () => createOrder({ customer, orderStatus, bill, items }),
    onSuccess: ({ data }) => {
      const tableData = { status: TableStatus.BOOKED, orderId: data._id };
      updateTableData({ data: tableData, id: table });
      enqueueSnackbar("Orden confirmada", { variant: "success" });
    },
    onError: (error) => {
      if (error) {
        if (typeof error.message === "string") {
          enqueueSnackbar(error.message, { variant: "error" });
        } else {
          enqueueSnackbar("Ocurrió un error", { variant: "error" });
        }
      }
    },
  });

  return { placeOrder, ...rest };
};

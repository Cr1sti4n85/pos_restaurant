import { useMutation } from "@tanstack/react-query";
import { OrderStatus } from "../../types";
import { updateOrderStatus } from "../../http/apiRequests";
import { enqueueSnackbar } from "notistack";
import queryClient from "../../config/queryClient";

export const useUpdateOrder = () => {
  const { mutate: updateOrder, ...rest } = useMutation({
    mutationFn: ({ data, id }: { data: OrderStatus; id: string }) =>
      updateOrderStatus(data, id),
    onSuccess: () => {
      enqueueSnackbar("Estatus de la orden actualizado", {
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error) => {
      if (error) {
        if (typeof error.message === "string") {
          enqueueSnackbar(error.message, { variant: "error" });
        } else {
          enqueueSnackbar(error.message[0], { variant: "error" });
        }
      }
    },
  });

  return { updateOrder, ...rest };
};

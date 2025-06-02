import { useMutation } from "@tanstack/react-query";
import { UpdateTable } from "../../types";
import { updateTable } from "../../http/apiRequests";
import { enqueueSnackbar } from "notistack";
import queryClient from "../../config/queryClient";

export const useUpdateTable = () => {
  const { mutate: updateTableData, ...rest } = useMutation({
    mutationFn: (
      { data, id }: { data: UpdateTable; id: string } //con esto le paso los parametros a la función y no al hook
    ) => updateTable(data, id),
    onSuccess: () => {
      enqueueSnackbar("Mesa actualizada", { variant: "success" });
      queryClient.invalidateQueries({ queryKey: ["tables"] });
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

  return { updateTableData, ...rest };
};

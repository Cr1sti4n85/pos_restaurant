import { useMutation } from "@tanstack/react-query";
import { ITableData } from "../../types";
import { addTable } from "../../http/apiRequests";
import { enqueueSnackbar } from "notistack";

export const useAddTable = (table: ITableData) => {
  const { mutate: createTable, ...rest } = useMutation({
    mutationFn: () => addTable(table),
    onSuccess: () => {
      enqueueSnackbar("Mesa añadida", { variant: "success" });
    },
    onError: (error) => {
      console.log("el error: ", error);
      if (error) {
        if (typeof error.message === "string") {
          enqueueSnackbar(error.message, { variant: "error" });
        } else {
          enqueueSnackbar(error.message[0], { variant: "error" });
        }
      }
    },
  });

  return { createTable, ...rest };
};

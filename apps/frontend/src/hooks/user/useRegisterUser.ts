import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
// import { useNavigate } from "react-router";
import { register } from "../../http/apiRequests";
import { IRegisterEmployee } from "../../types";

export const useRegisterUser = (
  user: IRegisterEmployee,
  setFormData: (e: IRegisterEmployee) => void
) => {
  // const navigate = useNavigate();

  const { mutate: signUp, ...rest } = useMutation({
    mutationFn: async () => await register(user),
    onSuccess: ({ data }) => {
      console.log(data);
      enqueueSnackbar("Registro exitoso", { variant: "success" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
      });
      // navigate("/", { replace: true });
    },
    onError: (error) => {
      if (error) {
        if (typeof error.message === "string") {
          enqueueSnackbar(error.message, { variant: "error" });
        } else {
          enqueueSnackbar("Something went wrong", { variant: "error" });
        }
      }
    },
  });

  return { signUp, ...rest };
};

import { useMutation } from "@tanstack/react-query";
import { ILoginEmployee } from "../../types";
import { login } from "../../http/apiRequests";
import { enqueueSnackbar } from "notistack";
import { useUserStore } from "../../store/useUserStore";
import { useNavigate } from "react-router";

export const useLoginUser = (user: ILoginEmployee) => {
  //hooks
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const { mutate: signIn, ...rest } = useMutation({
    mutationFn: () => login(user),
    onSuccess: ({ data }) => {
      const { _id, name, email, phone, role } = data;
      setUser({
        _id,
        name,
        email,
        phone,
        role,
      });
      navigate("/", { replace: true });
      enqueueSnackbar("Sesión iniciada", { variant: "success" });
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

  return { signIn, ...rest };
};

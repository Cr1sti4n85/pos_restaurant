import { useMutation } from "@tanstack/react-query";
import queryClient from "../../config/queryClient";
import { logout } from "../../http/apiRequests";
import { useNavigate } from "react-router";
import { useUserStore } from "../../store/useUserStore";

export const useLogoutUser = () => {
  const { removeUser } = useUserStore();
  const navigate = useNavigate();
  const { mutate: signout } = useMutation({
    mutationFn: logout,
    onSettled: () => {
      removeUser();
      queryClient.clear(); //clears the entire cache
      navigate("/auth", { replace: true });
    },
    onError: (error) => {
      console.error("Logout failed:", error);
    },
  });

  return { signout };
};

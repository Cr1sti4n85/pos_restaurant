import { QueryOptions, useQuery } from "@tanstack/react-query";
import { getUserData } from "../../http/apiRequests";
import { IAuthUser } from "../../types";

const useAuth = (opts: QueryOptions<IAuthUser> = {}) => {
  const { data: user, ...rest } = useQuery<IAuthUser>({
    queryKey: ["auth"],
    queryFn: getUserData,
    staleTime: Infinity,
    ...opts,
  });

  return { user, ...rest };
};

export default useAuth;

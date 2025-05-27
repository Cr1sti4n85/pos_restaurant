import { QueryOptions, useQuery } from "@tanstack/react-query";
import { getUserData } from "../../http/apiRequests";
import { IUserData } from "../../types";

const useAuth = (opts: QueryOptions<IUserData> = {}) => {
  const { data: user, ...rest } = useQuery<IUserData>({
    queryKey: ["auth"],
    queryFn: getUserData,
    staleTime: Infinity,
    ...opts,
  });

  return { user, ...rest };
};

export default useAuth;

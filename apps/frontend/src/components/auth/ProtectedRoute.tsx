import { FC } from "react";
// import { useUserStore } from "../../store/useUserStore";
import { Navigate } from "react-router";
import useAuth from "../../hooks/user/useAuth";
import PageLoader from "../shared/PageLoader";

type ProtectedRoutesProps = {
  children: React.ReactNode;
};

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ children }) => {
  const { user, isLoading } = useAuth();
  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : user ? (
        children
      ) : (
        <Navigate to="/auth" replace />
      )}
    </>
  );
};
export default ProtectedRoutes;

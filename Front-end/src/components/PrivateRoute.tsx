import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { userName, loading } = useAuth();

  if (loading) {
    return <div className="text-center mt-8">Carregando...</div>;
  }

  if (!userName) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

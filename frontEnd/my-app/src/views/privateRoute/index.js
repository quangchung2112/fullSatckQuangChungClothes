import { useEffect, useState } from "react";
import Login from "../Login/Login";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckPermissions from "./checkPermissions";
const PrivateRouter = ({ path, children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
  }, [isAuthenticated]);
  return (
    <>{isAuthenticated && <CheckPermissions>{children}</CheckPermissions>}</>
  );
};

export default PrivateRouter;

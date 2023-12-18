import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminLogin from "../components/Admin/AdminLogin";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { isOwner, isLoading } = useSelector((state) => state.owner);

  useEffect(() => {
    if (isOwner === true) {
      navigate(`/dashboard`);
    }
  }, [isLoading, isOwner, navigate]);
  return (
    <div>
      <AdminLogin />
    </div>
  );
};

export default AdminLoginPage;

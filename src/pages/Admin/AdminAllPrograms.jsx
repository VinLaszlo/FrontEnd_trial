import React from "react";
import DashboardHeader from "../../components/Admin/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Admin/Layout/DashboardSideBar";
import AllPrograms from "../../components/Admin/AllPrograms";

const AdminAllPrograms = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={3} />
        </div>
        <div className="w-full justify-center flex">
          <AllPrograms />
        </div>
      </div>
    </div>
  );
};

export default AdminAllPrograms;

import React from "react";
import { useSelector } from "react-redux";
import MainLayout from "../../components/layouts/MainLayout";
import { authSlice } from "../../store/slices/authSlice";
// import DataTable from "../../components/layouts/reusables/DataTable";

function Dashboard() {
  const session = useSelector((state) => state.Auth);
  return (
    <MainLayout>
      <div>
        <header className="text-3xl my-2">
          Welcome back, <span className="uppercase">{session.user?.name}</span>{" "}
        </header>
        <h1>DASHBOARD</h1>
      </div>
    </MainLayout>
  );
}

export default Dashboard;

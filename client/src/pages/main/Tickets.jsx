import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import DataTable from "../../components/layouts/reusables/DataTable";
import { useDispatch } from "react-redux";
import axios from "axios";
import Spinner from "../../components/layouts/reusables/Spinner";
import { addTickets } from "../../store/slices/ticketSlice";

function Tickets() {
  const dispatch = useDispatch();
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);

  const fetchTickets = async () => {
    setFetching(true);
    try {
      const tickets = await axios.get("/ticket/get-all");
      setFetching(false);
      dispatch(addTickets(tickets.data));
      // console.log(tickets.data);
    } catch (error) {
      console.log(error.message);
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <MainLayout>
      {fetching ? (
        <div className="w-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <DataTable />
      )}
    </MainLayout>
  );
}

export default Tickets;

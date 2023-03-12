import React from "react";
import { useSelector } from "react-redux";
// import tickets from "../../../store/slices/ticketSlice";

function DataTable() {
  const tickets = useSelector((state) => state.tickets.tickets);
  //   useEffect(() => {
  //     console.log(tickets);
  //   }, []);

  return (
    <div className="container px-4 mx-auto sm:px-8 hidden md:block">
      <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
              >
                Ticket No
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
              >
                Booked By
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
              >
                Phone
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
              >
                Booked For
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
              >
                is paid
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets.length < 1 ? (
              <tr>
                <td
                  colSpan={5}
                  className="bg-white px-5 py-5 text-sm  border-b border-gray-200 "
                >
                  <h1 className="text-center">No data</h1>
                </td>
              </tr>
            ) : (
              tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {ticket.ticket_no}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {ticket.paid_by}
                    </p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {ticket.phone}
                    </p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {ticket.events.title}
                    </p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {ticket.is_paid ? (
                        <span className="text-green-800">YES</span>
                      ) : (
                        <span className="text-red-500">NO</span>
                      )}
                    </p>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;

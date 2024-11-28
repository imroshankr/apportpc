import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Board from "./component/Board";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState("status"); // Default grouping
  const [sortBy, setSortBy] = useState("priority"); // Default sorting
  const [users, setUsers] = useState([]);
  // Fetch data from the API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await response.json();
        setTickets(data.tickets || []);
        setUsers(data.users|| []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Header: GroupBy and SortBy dropdowns */}
      <Header groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy} />

      {/* Board: Displays grouped and sorted tickets */}
      <Board tickets={tickets} groupBy={groupBy} sortBy={sortBy} users={users} />
    </div>
  );
};

export default App;



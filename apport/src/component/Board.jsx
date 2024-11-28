import React from "react";
import Card from "./Card";
import { groupTickets, sortTickets } from "./utils";

const Board = ({ tickets, groupBy, sortBy , users }) => {
  // Group and sort tickets dynamically
  const groupedTickets = groupTickets(tickets, groupBy);
  const sortedTickets = sortTickets(groupedTickets, sortBy);

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
      {Object.keys(sortedTickets).map((group) => (
        <div
          key={group}
          style={{
            flex: "1",
            background: "#f9f9f9",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2>{group}</h2>
          {sortedTickets[group].map((ticket) => (
            <Card key={ticket.id} ticket={ticket} users={users} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;


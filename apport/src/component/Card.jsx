import React from "react";

const Card = ({ ticket, users }) => {
  const user = users.find((user) => user.id === ticket.userId);
  const userInitials = user ? user.name.slice(0, 2).toUpperCase() : "";

  const generateColor = () => {
    const palette = [
      "#90EE90", // Light Green
      "#9370DB", // Medium Purple
      "#B22222", // Firebrick
      "#A0522D", // Sienna
      "#6B8E23", // Olive Drab
      "#CD853F", // Peru
      "#DAA520", // Goldenrod
      "#708090", // Slate Gray
      "#4682B4", // Steel Blue
      "#32CD32", // Lime Green
    ];
    return palette[Math.floor(Math.random() * palette.length)];
  };

  const avatarBgColor = generateColor();
  const avatarTextColor = "#fff";

  return (
    <div
      style={{
        border: "1px solid #DCDCDC",
        padding: "12px",
        marginBottom: "12px",
        backgroundColor: "#FAFAFA",
        boxShadow: "2px 2px 8px rgba(200, 200, 200, 0.5)",
        borderRadius: "8px",
        width: "260px",
        position: "relative",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#666666", fontSize: "13px" }}>
          Ticket ID: {ticket.id}
        </span>

        {/* User Avatar */}
        {user && (
          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              backgroundColor: avatarBgColor,
              color: avatarTextColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "10px",
              position: "relative",
            }}
          >
            {userInitials}
            <div
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                backgroundColor: user.available ? "green" : "orange",
                position: "absolute",
                bottom: "0",
                right: "0",
                border: "1px solid #FAFAFA",
              }}
            />
          </div>
        )}
      </div>

      {/* Title Section */}
      <div style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
        <img
          src={
            ticket.status === "Todo"
              ? "Icons/icons_FEtask/To-do.svg"
              : ticket.status === "In progress"
              ? "Icons/icons_FEtask/in-progress.svg"
              : ticket.status === "Backlog"
              ? "Icons/icons_FEtask/Backlog.svg"
              : "Icons/icons_FEtask/Done.svg"
          }
          alt="status icon"
          style={{ marginRight: "6px", width: "20px" }}
        />
        <h3
          style={{
            fontSize: "16px",
            color: "#333333",
            margin: "0",
            fontWeight: "600",
          }}
        >
          {ticket.title}
        </h3>
      </div>

      {/* Tags Section */}
      <div style={{ marginTop: "12px" }}>
        {ticket.tag?.map((tag, index) => (
          <div
            key={index}
            style={{
              color: "#777777",
              border: "1px solid #E0E0E0",
              width: "auto",
              padding: "6px 10px",
              borderRadius: "8px",
              display: "inline-block",
              marginRight: "6px",
              marginBottom: "6px",
              fontSize: "12px",
              backgroundColor: "#F9F9F9",
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

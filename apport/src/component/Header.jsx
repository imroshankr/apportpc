import React from "react";

const Header = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        marginBottom: "20px",
      }}
    >
      {/* Group By Dropdown */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <label htmlFor="groupBy" style={{ marginRight: "10px" , marginLeft: "10px" }}>
          Group By:
        </label>
        <select
          id="groupBy"
          value={groupBy}
          onChange={(e) => setGroupBy(e.target.value)}
          style={{
            padding: "5px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="status">Status</option>
          <option value="userId">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      {/* Sort By Dropdown */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <label htmlFor="sortBy" style={{ marginLeft: "10px" ,  marginRight: "10px" }}>
          Sort By:
        </label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: "5px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default Header;


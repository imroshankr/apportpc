// Group tickets dynamically by status, user, or priority
export const groupTickets = (tickets, groupBy) => {
    const groups = {};
    tickets.forEach((ticket) => {
      const key = ticket[groupBy] ;
      if (!groups[key]) groups[key] = [];
      groups[key].push(ticket);
    });
    return groups;
  };
  
  // Sort tickets dynamically by priority or title
  export const sortTickets = (groupedTickets, sortBy) => {
    const sortedGroups = {};
    Object.keys(groupedTickets).forEach((group) => {
      sortedGroups[group] = groupedTickets[group].sort((a, b) => {
        if (sortBy === "priority") return b.priority - a.priority; // Descending
        if (sortBy === "title") return a.title.localeCompare(b.title); // Ascending
        return 0;
      });
    });
    return sortedGroups;
  };
  
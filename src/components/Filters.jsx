const Filters = ({ search, setSearch, location, setLocation, type, setType }) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="All">All Locations</option>
        <option value="Remote">Remote</option>
        <option value="On-site">On-site</option>
      </select>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="All">All Types</option>
        <option value="Internship">Internship</option>
        <option value="Full-time">Full-time</option>
      </select>
    </div>
  );
};

export default Filters;
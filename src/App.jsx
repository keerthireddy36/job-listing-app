import { useState } from "react";
import jobsData from "./data/jobs";
import JobCard from "./components/JobCard";
import Filters from "./components/Filters";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [type, setType] = useState("All");

  const filteredJobs = jobsData
    .filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((job) =>
      location === "All" ? true : job.location === location
    )
    .filter((job) =>
      type === "All" ? true : job.type === type
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="container">
      <h1>Job Board</h1>

      <Filters
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        type={type}
        setType={setType}
      />

      <div className="grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} highlight={search} />
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </div>
  );
}

export default App;

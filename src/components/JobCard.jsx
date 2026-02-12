const JobCard = ({ job, highlight }) => {
  const highlightText = (text) => {
    if (!highlight) return text;
    const regex = new RegExp(`(${highlight})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  return (
    <div className="card">
      <h3 dangerouslySetInnerHTML={{ __html: highlightText(job.title) }} />
      <p>{job.company} • {job.location}</p>
      <span className="badge">{job.type}</span>
    </div>
  );
};

export default JobCard;
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStrodJobApplication } from "../../Utility/Utility";
import SingleJob from "../SingleJob/SingleJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  // all appliend jobs
  const [appliedJobids, setAppliedjobs] = useState([]);
  // filter jobs
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobids);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobids.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      console.log(remoteJobs);
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobids.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };
  // filte jobs ends

  // effect for applied job
  useEffect(() => {
    const appliedJobids = getStrodJobApplication();
    if (jobs.length > 0) {
      const jobApllied = jobs.filter((job) => appliedJobids.includes(job.id));
      setAppliedjobs(jobApllied);
      setDisplayJobs(jobApllied);
    }
    // console.log(appliedJobids);
  }, []);
  return (
    <div>
      {/* <h2>jobs are applied {appliedJobids.length}</h2> */}
      <div className="flex justify-end my-6">
        <select className="select select-info w-1/4 max-w-xs">
          <option disabled selected>
            Select
          </option>
          <option onClick={() => handleJobsFilter("all")}>
            <a href="">All</a>
          </option>
          <option onClick={() => handleJobsFilter("remote")}>
            <a href="">Remote</a>
          </option>
          <option onClick={() => handleJobsFilter("onsite")}>
            <a href="">Onsite</a>
          </option>
        </select>
      </div>
      {displayJobs.map((singleJob) => (
        <SingleJob key={singleJob.id} singleJob={singleJob}>
          {" "}
        </SingleJob>
      ))}
    </div>
  );
};

export default AppliedJobs;

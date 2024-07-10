import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatuedJobs = () => {
  const [jobs, setJobs] = useState([]);

  //   this is not the best way to load date
  const [dataLength, setDataLenght] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-5xl text-center">Featued Jobs</h2>
      {/* <h2 className="text-5xl text-center">Featued Jobs:{jobs.length}</h2> */}

      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <br />
      <br />
      <div className="grid md:grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length ? 'hidden':''}>
        <div className="card-actions justify-center my-8 ">
          {/* show all adta by set all data */}
          <button onClick={() => setDataLenght()} className="btn btn-primary ">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatuedJobs;

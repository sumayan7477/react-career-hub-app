import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    id
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl p-6">
      <figure className="justify-start ">
        <img src={logo} alt="Shoes" className="w-1/3  " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-4">
          <button className="border rounded p-2 border-purple-500">
            {remote_or_onsite}
          </button>
          <button className="border rounded p-2 border-purple-500">
            {job_type}
          </button>
        </div>
        <div className="flex gap-2">
          <p className="flex gap-2">
            <CiLocationOn></CiLocationOn>Location : {location}
          </p>
          <p className="flex gap-2">
            <CiBadgeDollar></CiBadgeDollar>Salary : {salary}
          </p>
        </div>
        <div className="card-actions justify-start">
            {/* dynamik link for job details button link to job details page*/}
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;

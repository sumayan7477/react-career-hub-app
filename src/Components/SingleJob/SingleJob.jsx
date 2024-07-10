import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleJob = ({ singleJob }) => {
  return (
    <div className="p-6 border border-gray-400 my-6 ">
        <img className="w-1/6" src={singleJob.logo} alt="" />
      <div>
        <h2>{singleJob.job_title}</h2>
        <br />
        <p>{singleJob.job_responsibility}</p>
        <Link><button className="btn btn-primary">View Details</button></Link>
      </div>
    </div>
  );
};

SingleJob.propTypes = {
  singleJob: PropTypes.object,
};

export default SingleJob;

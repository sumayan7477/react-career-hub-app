import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../Utility/Utility";

const JobDetails = () => {

  const jobs = useLoaderData();
  const { id } = useParams();
  const idint = parseInt(id);
  const job = jobs.find((job) => job.id === idint);
  console.log(job);

  const notify = () => {
    saveJobApplication(idint);
    toast("You Have Applie Successfully!")};

  return (
    <div>
      <div className="grid md:grid-cols-6 gap-4 m-6 p-20 text-sm">
        <div className="  md:col-span-4 flex flex-col gap-4 ">
          <div>
            <span className="font-bold">Job Description : </span>
            <span className="text-gray-400">{job.job_description}</span>
          </div>
          <div>
            <span className="font-bold">Job Responsibility : </span>
            <span className="text-gray-400">{job.job_responsibility}</span>
          </div>
          <div>
            <span className="font-bold">
              Educational Requirments : <br />{" "}
            </span>
            <span className="text-gray-400">
              {job.educational_requirements}
            </span>
          </div>
          <div>
            <span className="font-bold">
              Experiences : <br />{" "}
            </span>
            <span className="text-gray-400">{job.experiences}</span>
          </div>
        </div>

        <div className="  md:col-span-2 ">
          <div className="bg-blue-950 p-8 mb-2 flex flex-col gap-1 flex-grow rounded-lg">
            <span className="font-bold">Job Details</span>
            <hr />

            <div>
              <span className="font-bold"> Salary: </span>
              <span className="text-gray-400">{job.salary}</span>
            </div>
            <div>
              <span className="font-bold"> Job Taitle: </span>
              <span className="text-gray-400">{job.job_title}</span>
            </div>

            <br />
            <span className="font-bold">Contact Details</span>
            <hr />

            <div>
              <span className="font-bold"> Phone: </span>
              <span className="text-gray-400">
                {job.contact_information.phone}
              </span>
            </div>
            <div>
              <span className="font-bold"> Email: </span>
              <span className="text-gray-400">
                {job.contact_information.email}
              </span>
            </div>
            <div>
              <span className="font-bold"> Address: </span>
              <span className="text-gray-400">
                {job.contact_information.address}
              </span>
            </div>
          </div>
          <button onClick={notify} className="btn btn-primary w-full">Apply Now </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default JobDetails;

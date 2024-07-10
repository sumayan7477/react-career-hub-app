// add  data to localhost
const getStrodJobApplication = () =>{
    const storedJopAPplication =localStorage.getItem('job-application');
    if(storedJopAPplication){
        return JSON.parse(storedJopAPplication);
    }
    return[];
}

const saveJobApplication = id =>{
    const storedJopAPplication = getStrodJobApplication();
    const exists = storedJopAPplication.find(jobId => jobId ===id);
    if (!exists){
        storedJopAPplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJopAPplication))
    }
}

export {saveJobApplication ,getStrodJobApplication}
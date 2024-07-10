import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import FeatuedJobs from "../FeatuedJobs/FeatuedJobs";

const Home = () => {
    return (
        <div>
            {/* changing titlr by helmate */}
            <Helmet>
                <title> Career hub / Home</title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <FeatuedJobs></FeatuedJobs>
            
        </div>
    );
};

export default Home;
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Hedaer from "../Hedaer/Hedaer";

const Root = () => {
  return (
    <div>
        <Hedaer></Hedaer>
      <div className="max-w-6xl mx-auto">
        
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;

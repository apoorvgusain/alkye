import ImageCarousel from "./ImageCarousel";
import Logo from "../../assets/logo/Logo_white.png";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="bg-black lg:p-20 p-6">
      <Link to="/">
        <img src={Logo} alt="Test Logo" className=" w-1/6 lg:w-fit" />
      </Link>
      <div className="text-white lg:px-8 py-6">
        <h2 className="lg:text-3xl text-2xl">
          Welcome <span className="underline">Test</span>
        </h2>
        <p className="font-bold py-2">Hope you having a good day!</p>
      </div>
      <div className="pt-10">
        <h2 className="lg:text-3xl text-2xl text-white lg:px-8">Photography</h2>
      </div>
      <ImageCarousel />
      <div className="pt-10">
        <h2 className="lg:text-3xl text-2xl text-white lg:px-8">Learning</h2>
      </div>
      <ImageCarousel />
    </div>
  );
};

export default Dashboard;

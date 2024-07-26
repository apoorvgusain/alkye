import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="bg-gray-100 lg:p-20 p-10">
      <Outlet />
    </div>
  );
};

export default Body;

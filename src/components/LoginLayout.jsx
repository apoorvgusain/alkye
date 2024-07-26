import { Link } from "react-router-dom";
import Logo from "../../assets/logo/Logo.png";
export default function LoginLayout() {
  return (
    <div className="border border-white rounded-3xl lg:rounded-xl bg-white lg:p-20 p-6 ">
      <Link to="/">
        <img src={Logo} alt="Test Logo" className=" w-1/4 lg:w-fit" />
      </Link>
      <div className="w-full lg:flex justify-between py-10">
        <div className="lg:w-4/12 ">
          <p className="lg:text-xl text-sm">Step 1</p>
          <h3 className="lg:text-4xl text-lg font-bold">
            Enter your email address to continue
          </h3>
          <p className="text-xs lg:text-lg">
            Log in to your account. If you don’t have one, you will be prompted
            to create one.
          </p>
        </div>

        <div className="lg:w-8/12 w-full pt-10 pb-6">
          <div className="py-2  flex justify-end">
            <input
              type="email"
              placeholder="Email"
              className="   border border-gray-500 rounded-sm lg:p-5 px-2 py-3 lg:w-10/12 w-full font-semibold  placeholder:text-gray-500 text-xs lg:text-lg"
            />
          </div>
          <div className="lg:py-5 py-1 flex justify-end  ">
            <div className="flex justify-between w-full lg:w-10/12 ">
              <span className="text-xs lg:text-lg underline pt-4">
                Have an account?
              </span>
              <Link to="/login-step-two">
                <button className=" border border-black lg:rounded-lg rounded bg-black text-white lg:px-8 lg:py-3  py-2 px-4 text-xs lg:text-lg font-bold">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

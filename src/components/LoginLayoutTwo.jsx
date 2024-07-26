import { Link } from "react-router-dom";
import Logo from "../../assets/logo/Logo.png";
export default function LoginLayoutTwo() {
  return (
    <div className="border border-white rounded-3xl lg:rounded-xl bg-white lg:p-20 p-6 ">
      <div className="w-full lg:pb-14">
        <Link to="/">
          <img src={Logo} alt="Test Logo" className=" w-1/4 lg:w-fit" />
        </Link>
      </div>
      <div className="w-full lg:flex justify-between py-10">
        <div className="lg:w-4/12 ">
          <p className="lg:text-xl text-sm">Step 2</p>
          <h3 className="lg:text-4xl text-lg font-bold">
            Create an account to continue
          </h3>
          <p className="text-xs lg:text-lg">
            You’ll be able to log in to Dingoo with this email address and
            password.
          </p>
        </div>

        <div className="lg:w-8/12 w-full pt-10 pb-6">
          <div className="flex w-full justify-end">
            <p className="lg:w-10/12 lg:text-lg text-xs">
              Enter a password to create your account with
            </p>
          </div>
          <div className="py-2 flex justify-end">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-500 rounded-sm lg:p-5 px-2 py-3 lg:w-10/12 w-full font-semibold placeholder:text-gray-500 text-xs lg:text-lg"
            />
          </div>
          <div className="lg:py-5 py-1 flex justify-end">
            <div className="flex justify-between w-full lg:w-10/12">
              <span className="text-xs lg:text-base pt-2">
                Use a minimum of 6 characters (case sensitive) with at least one
                number or special character.
              </span>
              <Link to="/dashboard">
                {" "}
                <button className="lg:w-60 w-full border border-black lg:rounded-lg rounded bg-black text-white py-2 px-4 lg:py-3 lg:px-2 text-xs lg:text-sm font-bold h-10 lg:h-12">
                  <span className="lg:hidden">Continue</span>
                  <span className="hidden lg:block">Agree & Continue</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

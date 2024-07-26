import Facebook from "../../assets/icons/facebook.png";
import Instagram from "../../assets/icons/instagram.png";
import Twitter from "../../assets/icons/twitter.png";
import Twitch from "../../assets/icons/twitch.png";
import Youtube from "../../assets/icons/youtube.png";
const Footer = () => {
  return (
    <div className="bg-black text-white lg:p-20 py-10 px-8">
      <div className="lg:px-44">
        <div className="flex justify-between w-1/2">
          <img className="lg:w-8 w-6" src={Facebook} alt="Facebook" />
          <img className="lg:w-8 w-6" src={Instagram} alt="Instagram" />
          <img className="lg:w-8 w-6" src={Twitter} alt="Twitter" />
          <img className="lg:w-8 w-6" src={Twitch} alt="Twitch" />
          <img className="lg:w-8 w-6" src={Youtube} alt="Youtube" />
        </div>
        <div className="w-full py-10 flex justify-between lg:block">
          <ul className="lg:flex lg:justify-between lg:py-5 text-sm lg:text-lg lg:w-full w-1/2">
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Cookie preferences</li>
            <li>Corporate Information</li>
          </ul>
          <ul className="lg:flex lg:justify-between text-sm lg:text-lg lg:w-full w-1/2">
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Cookie preferences</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <p className="lg:pt-28 pt-10">© Alkye Test</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

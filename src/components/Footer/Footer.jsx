import "./Footer.css";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

function Footer() {
  return (
    <div >
    <div className="button_div_footer">
            <button className="footer_button">
              <BiLogoFacebook />
            </button>
            <button className="footer_button">
              <BiLogoInstagram />
            </button>
            <button className="footer_button">
              <BiLogoTwitter />
            </button>
            <button className="footer_button">
              <BiLogoYoutube />
            </button>
          </div>
      <div className="main_footer_div">  
        <div>
          <div className="text_align_div">
            <li>
              <a href="#">Audio Description</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Legal Notice</a>
            </li>
          </div>
        </div>
        <div className="text_align_div">
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Cookie Prefrences</a>
          </li>
        </div>
        <div className="text_align_div">
          <li>
            <a href="#">Gift Cards</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Corporate Information</a>
          </li>
        </div>
        <div className="text_align_div">
          <li>
            <a href="#">Media Centre</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import Toggle from "../Toggle/Toggle";
import "./Navbar.scss";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="n-wrapper" >
      <div className="n-left">
        <div className="n-name">Asilbek</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>

            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>

            <Link spy={true} to="Experience" smooth={true}>
              <li>Experince</li>
            </Link>

            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact me</button>
      </div>
    </div>
  );
}

export default Navbar;

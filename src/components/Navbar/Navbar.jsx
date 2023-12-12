import "./Navbar.css"
import { BsSearch } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { AiOutlineCaretDown } from "react-icons/ai";
import netflixicon from "../../assets/images/netflix.png"
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header>
          <div className="main_div">
            <div><img src={netflixicon} alt="Icon"/></div>
          <nav>
            <Link>Home</Link>
            <Link to="/View">TV Show</Link>
            <a href="#">Movie</a>
            <a href="#">New&Popular</a>
            <a href="#">My List</a>
            <a href="#">Browse by Languages</a>
          </nav>
          </div>
          <div className="icon_div">
          <button className="btn"><BsSearch/></button>
          <h3>Children</h3>
          <button className="btn"><BiBell/></button>
          <div className="right_div"><img className="icon_div_img" src="https://occ-0-3213-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4" alt="Icon"/>
          <button className="btn arrowbtn"><AiOutlineCaretDown/></button>
          </div>
          </div>
      </header>
    </>
  )
}

export default Navbar

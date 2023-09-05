import "./Banner.css"
import imga from "../../assets/images/onepiece.webp"
import { BsFillPlayFill } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
function Baneer() {
  return (
    <>
      <div className='banner_img'>
      <div className="gradient"></div>
        <div className="banner_div">
        <div>
        <img className="banner_div_img" src={imga} alt="img"/>
        </div>
        <p className="banner_para">With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure in this live-action adaptation of the popular manga.</p>
        <div className="banner_btn">
            <button className="btnban btnban1"><BsFillPlayFill/>Play</button>
            <button className="btnban btnban2"><BiInfoCircle/>More Info</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Baneer

import "./Popup.css";
// import aman from "../../data/data"
function Poppage(props) {
  return (
    <div className="center_div">
      <div className="postion_poppage">
        <div className="pagetext_main_div">
          <div>
            <h4 className="age_linit_para">
              <span>99% Match</span> 2023 7 Episodes
              <div className="age_limit"> HD</div>
            </h4>
            <p className="age_linit_para">
              <div className="age_limit"> U/A 16+</div> gore csva;lgjn
              asd;dlgjnj
            </p>
          </div>
          <div>
            <h4>
              Cast:Rajkummar Rao,Dulquer,Salman,adarsh
              <br />
              ;lajfnafna;ldjfnas;ljn'lkn;l;jjn;kknj
            </h4>
          </div>
        </div>
        <div className="pagetext_main_div">
          <div>
            <h4>
              sa;glijsa;gjjs;aofgjnnas;ogjsa f;asjdfja;sojfjd as;lfldjnas;ojn
            </h4>
          </div>
          <div>
            <h4>
              Cast:Rajkummar Rao,Dulquer,Salman,adarsh
              <br />
              ;lajfnafna;ldjfnas;ljn'lkn;l;jjn;kknj
            </h4>
            <h4>THis show is:oofbeatmd;lfljkj</h4>
          </div>
        </div>
        <button onClick={props.closebtn}>
          Close Pop
        </button>
      </div>
    </div>
  );
}

export default Poppage;

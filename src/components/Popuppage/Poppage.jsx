import "./Popup.css";
import { RxCross2 } from "react-icons/rx";
function Poppage({
  movieId,
  closebtn,
  listofMovies1,
  listofMovies2,
  listofMovies3,
  selectedList,
}) {
  let selectedMovies;
  if (selectedList === "listofMovies1") {
    selectedMovies = listofMovies1;
  } else if (selectedList === "listofMovies2") {
    selectedMovies = listofMovies2;
  } else if (selectedList === "listofMovies3") {
    selectedMovies = listofMovies3;
  } else {
    selectedMovies = [...listofMovies1, ...listofMovies2, ...listofMovies3];
  }
  const movieData = selectedMovies.find(
    (movie) => movie.id === parseInt(movieId)
  );
  if (!movieData) {
    return (
      <div className="center_div">
        <div className="postion_poppage">
          <p>Error: Movie not found</p>
          <button onClick={closebtn}>
            <RxCross2 />
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="asdf">
      <div className="center_div">
        <div style={{position:"relative"}}>
          <img className="img" src={movieData.imageName} />
          <div className="newgrdien"></div>
        </div>
        <div className="pagetext_main_div">
          <div className="pagetext">
            <h4 className="  margin">
              <span style={{ color: "#45D268" }}>{movieData.match} Match</span>{" "}
              {movieData.year} {movieData.part} &nbsp;
              <b className="hdbox">HD</b>
            </h4>
            <p style={{ marginBottom: "12px" }}>
              <b className="hdbox">A</b>&nbsp; {movieData.about}
            </p>
            <p>{movieData.title}</p>
          </div>
          <div className="pagetext">
            <span style={{ color: "grey", fontWeight: "600" }}>Cast:</span>
            {movieData.cast}
            <br />
            <span style={{ color: "grey", fontWeight: "600" }}>Genres:</span>
            {movieData.geners}
            <br />
            <span style={{ color: "grey", fontWeight: "600" }}>
              This Series is:
            </span>
            {movieData.show}
          </div>
          <button className="closebtn" onClick={closebtn}>
            <RxCross2 style={{ fontSize: "27px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Poppage;

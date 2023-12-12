import React, { useState } from "react";
import Poppage from "../Popuppage/Poppage";
import "./List.css";
import { listofMovies1, listofMovies2, listofMovies3 } from "../../data/data";

function List() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
const [selectedList, setSelectedList] = useState("listofMovies1");
  const handleMovieClick = (movieId,list) => {
    setSelectedMovieId(movieId);
    setSelectedList(list)
    setIsOpen(true);
  };

  const closePoppage = () => {
    setIsOpen(false);
    setSelectedMovieId(null);
  };
  return (
    <>
      <div className="list_section">
        <h2>Hindi Movie & TV</h2>
        <div className="main_movie_div">
          {listofMovies1.map((user, i) => (
            <div key={i}>
              <img
                className="movie_img"
                onClick={() => handleMovieClick(user.id,"listofMovies1")}
                src={user.imageName}
                alt={`Movie ${user.id}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="list_section">
        <h2>Trending Now</h2>
        <div className="main_movie_div">
          {listofMovies2.map((user, i) => (
            <div key={i}>
              <img
                className="movie_img"
                onClick={() => handleMovieClick(user.id,"listofMovies2")}
                src={user.imageName}
                alt={`Movie ${user.id}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="list_section">
        <h2>Only on Netflix</h2>
        <div className="main_movie_div">
          {listofMovies3.map((user, i) => (
            <div key={i}>
              <img
                className="movie_img"
                onClick={() => handleMovieClick(user.id,"listofMovies3")}
                src={user.imageName}
                alt={`Movie ${user.id}`}
              />
            </div>
          ))}
        </div>
      </div>
      {isOpen && selectedMovieId !== null && (
        <Poppage
          movieId={selectedMovieId}
          closebtn={closePoppage}
          listofMovies1={listofMovies1} listofMovies2={listofMovies2} listofMovies3={listofMovies3}
          selectedList={selectedList}
        />
      )}
    </>
  );
}
export default List;

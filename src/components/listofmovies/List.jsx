import "./List.css";
import { listofMovies1, listofMovies2, listofMovies3 } from "../../data/data";
import {useState} from 'react';
import Poppage from "../Popuppage/Poppage";

function List() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="list_section">
        <h2>Hindi Movie & TV</h2>
        <div className="main_movie_div">
          {listofMovies1.map((user) => (
            <div>
              <img className="movie_img" onClick={() => setIsOpen(true)} src={user.imageName} />
            </div>
          ))}
        </div>
      </div>
      <div className="list_section">
        <h2>Trending Now</h2>
        <div className="main_movie_div">
          {listofMovies2.map((user) => (
            <div>
              <img className="movie_img" onClick={() => setIsOpen(true)} src={user.imageName} />
            </div>
          ))}
        </div>
      </div>
      <div className="list_section">
        <h2>Only on Netflix</h2>
        <div className="main_movie_div">
          {listofMovies3.map((user) => (
            <div>
              <img className="movie_img" onClick={() => setIsOpen(true)} src={user.imageName} />
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
       <>
        <Poppage closebtn={() => setIsOpen(false)}/>
       </>
      )}
    </>
  );
}

export default List;

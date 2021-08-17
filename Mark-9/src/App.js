import React from "react";
import "./styles.css";
import { useState } from "react";

const MoviesSet = {
  SciFi: [
    { name: "Inception", rating: "9/10" },
    { name: "Martian", rating: "8.5/10" },
    { name: "Marvel's Endgame", rating: "9/10" },
    { name: "justice league snyder cut", rating: "8.5/10" }
  ],

  MindBenders: [
    { name: "Intersteller", rating: "10/10" },
    { name: "Fight Club", rating: "9/10" },
    { name: "sherlock holmes a game of shadows", rating: "9/10" }
  ],
  Comedy: [
    { name: "Bruce Almighty", rating: "9/10" },
    { name: "The Dictator", rating: "9/10" },
    { name: "Phir Hera Pheri", rating: "10/10" }
  ],
  Action: [
    { name: "Jhon Wick Triology", rating: "10/10" },
    { name: "Hobbs & Shaw", rating: "9/10" },
    { name: "The sucide Squard", rating: "9/10" },
    { name: "The Mechanic 1 & 2", rating: "9/10" }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("Action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 className="header"> Favourite Movies.</h1>
      <div className="bg">
        <p className="title">Checkout My Fav Movies. Select One to start </p>

        <div>
          {Object.keys(MoviesSet).map((genre) => (
            <button onClick={() => genreClickHandler(genre)}>{genre}</button>
          ))}
        </div>
        <div>
          <ul>
            {MoviesSet[selectedGenre].map((Movie) => (
              <li key={Movie.name}>
                {" "}
                <div style={{ fontSize: "larger" }}> {Movie.name} </div>
                <div style={{ fontSize: "smaller" }}> {Movie.rating} </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Header.css";
import hero from "../../assets/hero.jpg";

function Header() {
   return (
      <div className="header">
         <h1>
            Epic Games : An American video game and software developer and
            publisher based in Cary, North Carolina.
         </h1>
         <img
            src={hero}
            alt="Fortnite Poster"
         />
         <p>
            Create, play, and battle with friends for free in Fortnite. Be the
            last player standing in Battle Royale and Zero Build, experience a
            concert or live event, or discover over a million creator made
            games, including racing, parkour, zombie survival, and more. Each
            Fortnite island has an individual age rating so you can find the one
            that's right for you and your friends. Find it all in Fortnite ...
            Drop In.
         </p>
         <button>Visit Website</button>
      </div>
   );
}

export default Header;

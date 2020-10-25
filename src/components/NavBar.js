import React from "react";

import Champions from "./Champions";

function NavBar() {
  const key_data = Object.entries(Champions[0].keys);

  return (
    <header className="NavBar">
      <h3 className="AppName">RIOT STATS TRACKER</h3>
      <div>
        <form className="SearchBar">
          <label htmlFor="SummonerName">Summoner Name</label>
          <input type="text" id="SummonerName" name="SummonerName"></input>
          <input type="submit" value="Search"></input>
        </form>
      </div>
      <div className="dropDown">
        <div className="ChampionDropdown">
          <button className="ChampionDropButton">Champion</button>
          <div className="ChampionList">
            {key_data.map((key) => {
              return <a href={`/?championid=${key[0]}`}>{key[1]}</a>;
            })}
          </div>
        </div>
        <button className="ChampionDropButton">Item</button>
      </div>
    </header>
  );
}

export default NavBar;

import React from "react";

import Champions from "./Champions";

function NavBar() {

  return (
    <header className="NavBar">
      <h1>RIOT STATS TRACKER</h1>
      <div>
        <form>
          <label htmlFor="SummonerName">Summoner Name</label>
          <input type="text" id="SummonerName" name="SummonerName"></input>
          <input type="submit" value="Search"></input>
        </form>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Champion</button>
        <div className="dropdown-content">
          
          <a href="/Champion/?championid=6">Champ1</a>
          <a href="/Champion/?championid=1">Link 2</a>
          <a href="/Champion/?championid=4">Link 3</a>
        </div>
      </div>
      <h2>Items</h2>
    </header>
  );
}

export default NavBar;

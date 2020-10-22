import React from "react";

function NavBar() {
  return (
      <header className="NavBar">
        <h1>RIOT STATS TRACKER</h1>
        <div>
          <form>
            <label htmlFor="SummonerName">Summoner Name</label>
            <input type="text" id="SummonerName" name="SummonerName"></input>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
        <h2>Champions</h2>
        <h2>Items</h2>
      </header>
  );
}

export default NavBar;

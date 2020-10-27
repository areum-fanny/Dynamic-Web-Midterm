import React from "react";

import Champions from "./Champions";
import Items from "./Items";

function NavBar() {
  /*We are creating an array of the of ids and names of champions. 
  We then sort out the names and find the ids associated with the respective champion and push them to a new array.
  */

  const championkeys = Object.keys(Champions[0].keys);
  const championName = Object.values(Champions[0].keys);
  const championID = [];
  championName.sort();
  championName.map((name) => {
    let champId = championkeys.find((id) => Champions[0].keys[id] === name);
    championID.push(champId);
  });
  //We do something similar to get the items sorted out in alphabetical order
  const itemkeys = Object.keys(Items[0].data);
  const itemdata = Items[0].data;
  const itemname = [];
  const itemid = [];
  itemkeys.map((key) => {
    itemname.push(itemdata[key].name);
  });
  itemname.sort();
  itemname.map((name) => {
    let id = itemkeys.find((element) => itemdata[element].name === name);
    itemid.push(id);
  });

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
        <div className="Dropdown">
          <button className="DropButton">Champion</button>
          <div className="DropList">
            {championName.map((name, i) => {
              return (
                <a key={i} href={`/?championid=${championID[i]}`}>
                  {name}
                </a>
              );
            })}
          </div>
        </div>
        <div className="Dropdown">
          <button className="DropButton">Item</button>
          <div className="DropList">
            {itemid.map((id, i) => {
              return (
                <a key={i} href={`/?itemid=${id}`}>
                  {itemname[i]}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;

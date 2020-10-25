import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import NavBar from "../components/NavBar";
import ChampionEntry from "../components/ChampionEntry";
import PlayerEntry from "../components/PlayerEntry";

function Home() {
  const history = useHistory();
  const [summonerName, setSummonerName] = useState();
  const [championID, setchampionID] = useState(null);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const summonerName = urlParams.get("SummonerName");
    const id = urlParams.get("championid");
    if (summonerName) {
      setSummonerName(summonerName);
    }
    if (id) {
      setchampionID(id);
    }
  }, [history]);
  console.log(summonerName, "name");
  if (championID !== null) {
    return (
      <div className="Body">
        <NavBar />
        <ChampionEntry id={championID} />
      </div>
    );
  } else if (summonerName != undefined) {
    return (
      <div className="Body">
        <NavBar />
        <PlayerEntry summonerName={summonerName} />
      </div>
    );
  } else {
    return (
      <div className="Body">
        <NavBar />
      </div>
    );
  }
}

export default Home;

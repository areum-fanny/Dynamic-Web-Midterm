import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import NavBar from "../components/NavBar";
import ChampionEntry from "../components/ChampionEntry";
import PlayerEntry from "../components/PlayerEntry";
import ItemEntry from "../components/ItemEntry";

function Home() {
  const history = useHistory();
  const [summonerName, setSummonerName] = useState();
  const [championID, setchampionID] = useState(null);
  const [itemID, setitemid] = useState(null);
  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const summonerName = urlParams.get("SummonerName");
    const champid = urlParams.get("championid");
    const itemid = urlParams.get("itemid");
    if (summonerName) {
      setSummonerName(summonerName);
    }
    if (champid) {
      setchampionID(champid);
    }
    if (itemid) {
      setitemid(itemid);
    }
  }, [history]);

  if (championID !== null) {
    return (
      <div className="Body">
        <NavBar />
        <ChampionEntry id={championID} />
      </div>
    );
  } else if (summonerName !== undefined) {
    return (
      <div className="Body">
        <NavBar />
        <PlayerEntry summonerName={summonerName} />
      </div>
    );
  } else if (itemID !== null) {
    return (
      <div className="Body">
        <NavBar />
        <ItemEntry id={itemID} />
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

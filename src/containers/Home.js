import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import NavBar from "../components/NavBar";
import ChampionEntry from "../components/ChampionEntry";
import PlayerEntry from "../components/PlayerEntry";

function Home() {
  const history = useHistory();
  const [summonerData, setsummonerData] = useState({});
  const [summonerName, setSummonerName] = useState();
  const [championID, setchampionID] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(function (response) {
        setsummonerData(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, [summonerName]);

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
 
  if (championID) {
    return (
      <div className="Body">
        <NavBar />
        <ChampionEntry id={championID} />
      </div>
    );
  } 
  else if(summonerData){
    return (
      <div className="Body">
        <NavBar />
        <PlayerEntry data={summonerData}/>
      </div>
    );
  }
  else{
    return(
      <div className="Body"> 
        <NavBar />
      </div>
    
    );
  }
}

export default Home;

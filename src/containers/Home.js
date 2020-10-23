import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
//import ProfileIcon from "../components/ProfileIcon";
import axios from "axios";
import NavBar from "../components/NavBar";
import ChampionEntry from "../components/ChampionEntry";

function Home() {
  const history = useHistory();
  const [summonerData, setsummonerData] = useState({});
  const [summonerName, setSummonerName] = useState(null);
  const [championID, setchampionID] = useState(null);
  let puuid = '';

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
    const id = urlParams.get("championid")
    if (summonerName) {
      setSummonerName(summonerName);
    }
    if(id){
      setchampionID(id);
    }
  }, [history]);
  console.log("id",championID);
  puuid = summonerData.puuid;
  console.log(summonerData);
  let profileIcon = summonerData.profileIconId;
  profileIcon = Number(profileIcon);
  if(championID){
    return (
      <div>
        <NavBar />
        <ChampionEntry id={championID} />
      </div>
    );
  }
  else{
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default Home;

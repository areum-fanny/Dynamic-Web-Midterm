import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ProfileIcon from "../components/ProfileIcon";
import axios from "axios";
import NavBar from "../components/NavBar";
function Home() {
  const history = useHistory();
  const [summonerData, setsummonerData] = useState({});
  const [summonerName, setSummonerName] = useState(null);

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
    if (summonerName) {
      setSummonerName(summonerName);
    }
  }, [history]);
  console.log(summonerData);
  
  let profileIcon = summonerData.profileIconId;
  profileIcon = Number(profileIcon);

  return (
    <div>
      <NavBar />
      <h1>Home</h1>
      <img src="1.png" alt="LOL" width="400" height="400" />
    </div>
  );
}

export default Home;

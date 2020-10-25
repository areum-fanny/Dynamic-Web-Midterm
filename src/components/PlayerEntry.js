import React, { useEffect, useState } from "react";

import axios from "axios";
import PlayerRankedDets from "./PlayerRankedDets";
import PlayerMatchdets from "./PlayerMatchdets";
function PlayerEntry({ summonerName }) {
  const [summonerData, setsummonerData] = useState({ name: null });
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

  if (summonerData.name) {
    return (
      <div>
        <div className="SummonerBasicInfo">
          <div className="SummonerProfileIcon">
            <img
              src={`/images/profileicon/${summonerData.profileIconId}.png`}
              alt="profileIcon"
            />
          </div>
          <div className="SummonerNameandLevel">
            <h1>Name: {summonerData.name}</h1>
            <h2>Level: {summonerData.summonerLevel}</h2>
          </div>
        </div>
        <PlayerRankedDets summonerID={summonerData.id} />
        <PlayerMatchdets summoneraccountID={summonerData.accountId} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default PlayerEntry;

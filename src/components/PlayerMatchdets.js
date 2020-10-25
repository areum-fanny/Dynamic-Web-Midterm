import React, { useState, useEffect } from "react";
import axios from "axios";

function PlayerMatchdets({ summoneraccountID }) {
  const [recentmatch, setrecentmatch] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${summoneraccountID}?endIndex=1?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(function (response) {
        setrecentmatch(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, [summoneraccountID]);
  console.log(recentmatch);
  return <div></div>;
}

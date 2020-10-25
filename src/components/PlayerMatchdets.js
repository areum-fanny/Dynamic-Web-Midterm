import React, { useState, useEffect } from "react";
import axios from "axios";
import Match from "./Match";

function PlayerMatchdets({ summoneraccountID }) {
  const [recentmatch, setrecentmatch] = useState({ gameId: null });
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${summoneraccountID}?endIndex=1&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(function (response) {
        setrecentmatch(response.data.matches[0]);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, [summoneraccountID]);

  if (recentmatch.gameId) {
    return <Match matchId={recentmatch.gameId} />;
  } else {
    return <div></div>;
  }
}

export default PlayerMatchdets;

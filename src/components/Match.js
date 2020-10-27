import React, { useState, useEffect } from "react";
import axios from "axios";
import Displaymatch from "./Displaymatch";

function Match({ matchId }) {
  const [matchData, setMatchdata] = useState({});
  const [participantIdentityData, setparticipantIdentities] = useState({
    0: null,
  });
  const [participantData, setparticipantData] = useState({ 0: null });

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matches/${matchId}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(function (response) {
        setMatchdata(response.data.teams);
        setparticipantData(response.data.participants);
        setparticipantIdentities(response.data.participantIdentities);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, [matchId]);

  if (participantData[0] != null && participantIdentityData[0] != null) {
    return (
      <div>
        {participantData.map((data, i) => {
          return (
            <Displaymatch
              key={i}
              playerinfo={participantIdentityData[i]}
              playerdata={data}
            />
          );
        })}
      </div>
    );
  }
  return <div></div>;
}
export default Match;

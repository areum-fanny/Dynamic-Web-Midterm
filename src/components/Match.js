import React, { useState, useEffect } from "react";
import axios from "axios";
import Displaymatch from "./Displaymatch";

function Match({ matchId }) {
  const [matchData, setMatchdata] = useState([]);
  const [participantIdentityData, setparticipantIdentities] = useState({
    0: null,
  });
  let team1backgroundcolor = "";
  let team2backgroundcolor = "";
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
    if (matchData[0].win === "Win") {
      team1backgroundcolor = "#a7cceb";
      team2backgroundcolor = "#ebc6a7";
    } else {
      team1backgroundcolor = "#ebc6a7";
      team2backgroundcolor = "#a7cceb";
    }
    return (
      <div className="RecentMatch">
        <div
          className="Team1"
          style={{
            backgroundColor: team1backgroundcolor,
            border: "2px solid grey",
          }}
        >
          {participantData.map((data, i) => {
            if (i < 5) {
              return (
                <Displaymatch
                  key={i}
                  playerinfo={participantIdentityData[i]}
                  playerdata={data}
                />
              );
            }
          })}
        </div>
        <div
          className="Team2"
          style={{
            backgroundColor: team2backgroundcolor,
            border: "2px solid grey",
          }}
        >
          {participantData.map((data, i) => {
            if (i >= 5) {
              return (
                <Displaymatch
                  key={i}
                  playerinfo={participantIdentityData[i]}
                  playerdata={data}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
  return <div></div>;
}
export default Match;

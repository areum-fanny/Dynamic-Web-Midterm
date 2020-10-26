import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import SummonerSpell from "./SummonerSpell";
import Champions from "./Champions";

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

  const {
    player1,
    player2,
    player3,
    player4,
    player5,
    player6,
    player7,
    player8,
    player9,
    player10,
  } = useMemo(() => {
    let player1 = {};
    let player2 = {};
    let player3 = {};
    let player4 = {};
    let player5 = {};
    let player6 = {};
    let player7 = {};
    let player8 = {};
    let player9 = {};
    let player10 = {};

    if (participantIdentityData[0] != null) {
      player1 = participantIdentityData[0].player;
      player2 = participantIdentityData[1].player;
      player3 = participantIdentityData[2].player;
      player4 = participantIdentityData[3].player;
      player5 = participantIdentityData[4].player;
      player6 = participantIdentityData[5].player;
      player7 = participantIdentityData[6].player;
      player8 = participantIdentityData[7].player;
      player9 = participantIdentityData[8].player;
      player10 = participantIdentityData[9].player;
    }
    return {
      player1,
      player2,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      player10,
    };
  }, [participantIdentityData]);

  const {
    player1Data,
    player2Data,
    player3Data,
    player4Data,
    player5Data,
    player6Data,
    player7Data,
    player8Data,
    player9Data,
    player10Data,
  } = useMemo(() => {
    let player1Data = {};
    let player2Data = {};
    let player3Data = {};
    let player4Data = {};
    let player5Data = {};
    let player6Data = {};
    let player7Data = {};
    let player8Data = {};
    let player9Data = {};
    let player10Data = {};

    if (participantData[0] != null) {
      player1Data = participantData[0];
      player2Data = participantData[1];
      player3Data = participantData[2];
      player4Data = participantData[3];
      player5Data = participantData[4];
      player6Data = participantData[5];
      player7Data = participantData[6];
      player8Data = participantData[7];
      player9Data = participantData[8];
      player10Data = participantData[9];
    }
    return {
      player1Data,
      player2Data,
      player3Data,
      player4Data,
      player5Data,
      player6Data,
      player7Data,
      player8Data,
      player9Data,
      player10Data,
    };
  }, [participantData]);
  console.log(matchData);
  if (participantData[0] != null && participantIdentityData[0] != null) {
    return (
      <div>
        <div>
          <img
            src={`/images/profileicon/${player1.profileIcon}.png`}
            alt="profileIcon"
          />
          <p>{player1.profileIcon}</p>
          <p>{player1.summonerName}</p>
        </div>
        <div>
          <img
            src={`/images/item/${player1Data.stats.item0}.png`}
            alt="Item0"
          />
          <img
            src={`/images/item/${player1Data.stats.item1}.png`}
            alt="Item0"
          />
          <img
            src={`/images/item/${player1Data.stats.item2}.png`}
            alt="Item0"
          />
          <img
            src={`/images/item/${player1Data.stats.item3}.png`}
            alt="Item0"
          />
          <img
            src={`/images/item/${player1Data.stats.item4}.png`}
            alt="Item0"
          />
          <img
            src={`/images/item/${player1Data.stats.item5}.png`}
            alt="Item0"
          />
          <img
            src={`/images/spell/${SummonerSpell[0][player1Data.spell1Id]}`}
            alt="Item0"
          />
          <img
            src={`/images/spell/${SummonerSpell[0][player1Data.spell2Id]}`}
            alt="Item0"
          />
          <img
            src={`/images/champion/${
              Champions[0].keys[player1Data.championId]
            }.png`}
            alt="Item0"
          />
          <p>
            {player1Data.stats.kills}/{player1Data.stats.deaths}/
            {player1Data.stats.assists}
          </p>
        </div>
      </div>
    );
  }
  return <div></div>;
}
export default Match;

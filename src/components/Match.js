import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

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

  if (participantData[0] != null && participantIdentityData[0] != null) {
    return (
      <div>
        <p>{player1Data.stats.item0}</p>
      </div>
    );
  }
  return <div></div>;
}
export default Match;

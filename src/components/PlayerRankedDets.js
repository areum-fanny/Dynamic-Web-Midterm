import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

function PlayerRankedDets({ summonerID }) {
  const [LeagueEntryDTO, setleagueentrydto] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerID}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(function (response) {
        setleagueentrydto(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, [summonerID]);

  const { RankedSoloDTO, RankedFlexDTO } = useMemo(() => {
    let RankedSoloDTO = { rank: null };
    let RankedFlexDTO = { rank: null };
    for (let i = 0; i < LeagueEntryDTO.length; i++) {
      if (LeagueEntryDTO[i].queueType === "RANKED_SOLO_5x5") {
        RankedSoloDTO = LeagueEntryDTO[i];
      } else {
        RankedFlexDTO = LeagueEntryDTO[i];
      }
    }
    return {
      RankedSoloDTO,
      RankedFlexDTO,
    };
  }, [LeagueEntryDTO]);

  if (RankedFlexDTO.rank == null && RankedSoloDTO.rank == null) {
    return <div></div>;
  } else if (RankedSoloDTO.rank != null && RankedFlexDTO.rank != null) {
    return (
      <div className="RankedList">
        <div className="Ranked">
          <div>
            <img
              src={`/images/tier-icons/base-icons/${RankedSoloDTO.tier}.png`}
              alt=""
            ></img>
          </div>
          <div>
            <h1>Ranked Solo</h1>
            <p>
              {RankedSoloDTO.tier} {RankedSoloDTO.rank}
            </p>
            <p>LP: {RankedSoloDTO.leaguePoints}</p>
            <p>
              Win: {RankedSoloDTO.wins} Loss: {RankedSoloDTO.losses}
            </p>
            <p>Win Ratio:</p>
          </div>
        </div>
        <div className="Ranked">
          <div>
            <img
              src={`/images/tier-icons/base-icons/${RankedFlexDTO.tier}.png`}
              alt=""
            ></img>
          </div>
          <div>
            <h1>Ranked Flex</h1>
            <p>
              {RankedFlexDTO.tier} {RankedFlexDTO.rank}
            </p>
            <p>LP: {RankedFlexDTO.leaguePoints}</p>
            <p>
              Win: {RankedFlexDTO.wins} Loss: {RankedFlexDTO.losses}
            </p>
            <p>Win Ratio: </p>
          </div>
        </div>
      </div>
    );
  } else if (RankedSoloDTO.rank == null) {
    return (
      <div className="RankedList">
        <div className="Ranked">
          <h1>Ranked Solo</h1>
          <p>You have not played Ranked Solo</p>
        </div>
        <div className="Ranked">
          <div>
            <img
              src={`/images/tier-icons/base-icons/${RankedFlexDTO.tier}.png`}
              alt=""
            ></img>
          </div>
          <div>
            <h1>Ranked Flex</h1>
            <p>
              {RankedFlexDTO.tier} {RankedFlexDTO.rank}
            </p>
            <p>LP: {RankedFlexDTO.leaguePoints}</p>
            <p>
              Win: {RankedFlexDTO.wins} Loss: {RankedFlexDTO.losses}
            </p>
            <p>Win Ratio: </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="RankedList">
        <div className="Ranked">
          <div>
            <img
              src={`/images/tier-icons/base-icons/${RankedSoloDTO.tier}.png`}
              alt=""
            ></img>
          </div>
          <div>
            <h1>Ranked Solo</h1>
            <p>
              {RankedSoloDTO.tier} {RankedSoloDTO.rank}
            </p>
            <p>LP: {RankedSoloDTO.leaguePoints}</p>
            <p>
              Win: {RankedSoloDTO.wins} Loss: {RankedSoloDTO.losses}
            </p>
            <p>Win Ratio:</p>
          </div>
        </div>
        <div className="Ranked">
          <h1>Ranked Flex</h1>
          <p>You have not played RankedFlex</p>
        </div>
      </div>
    );
  }
}

export default PlayerRankedDets;

import Axios from "axios";
import React, {useState,useEffect} from "react";
import axios from "axios";
function PlayerEntry({ data }) {
  console.log(data);
  const [LeagueEntryDTO,setleagueentrydto] = useState();
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${data.id}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(function (response) {
        setleagueentrydto(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, [data]);
  console.log("league");
  if(LeagueEntryDTO){
      return (
          <h1>No entry</h1>
      );
  }
  return <div>There is entry</div>;
}

export default PlayerEntry;

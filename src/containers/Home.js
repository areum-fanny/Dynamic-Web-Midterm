
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Home(){
    const [summonerData,setsummonerData] = useState({});
    const summonerName = "Areum Fanny";
    useEffect(()=>{
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(function(response){
            setsummonerData(response.data);

        })
        .catch(function(error){
            console.warn(error);
        })
    },[]);
    return(
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;
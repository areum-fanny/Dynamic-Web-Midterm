
import React, { useEffect, useState } from 'react';
import ProfileIcon from '../components/ProfileIcon';
import axios from 'axios';
import NavBar from '../components/NavBar';
function Home(){
    const [summonerData,setsummonerData] = useState({});
    const [profileicon,setprofileicon] = useState({});
    const summonerName = "Areum Fanny";
    useEffect(()=>{
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(function(response){
            setsummonerData(response.data);
            setprofileicon(ProfileIcon[0][response.data.profileIconId].image);
        })
        .catch(function(error){
            console.warn(error);
        })
    },[]);
    console.log(summonerData);
    let profileIcon = summonerData.profileIconId;
    profileIcon = Number(profileIcon);
    console.log(profileicon.full);
    return(
        <div style={{backgroundImage:`url('../images/profileicon/${profileicon}')`}}> 
            <NavBar />
            <h1 >Home</h1>
            <img src='../images/profileicon/1114.png' alt="LOL"></img>
        </div>
    );
}

export default Home;
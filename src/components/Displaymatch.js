import React from "react";
import SummonerSpell from "./SummonerSpell";
import Champions from "./Champions";
function Displaymatch({ playerinfo, playerdata }) {
  return (
    <div className="MatchEntry">
      <div>
        <a href={`/?championid=${playerdata.championId}`}>
          <img
            src={`/images/champion/${
              Champions[0].keys[playerdata.championId]
            }.png`}
            alt="Item0"
          />
        </a>
        <div>
          <img
            src={`/images/spell/${SummonerSpell[0][playerdata.spell1Id]}`}
            alt="Item0"
          />
          <img
            src={`/images/spell/${SummonerSpell[0][playerdata.spell2Id]}`}
            alt="Item0"
          />
        </div>
      </div>
      <div>
        <div>
          <p>{playerinfo.player.summonerName}</p>
          <p>
            {playerdata.stats.kills}/{playerdata.stats.deaths}/
            {playerdata.stats.assists}
          </p>
        </div>
        <div>
          <a href={`/?itemid=${playerdata.stats.item0}`}>
            <img
              src={`/images/item/${playerdata.stats.item0}.png`}
              alt="Item0"
            />
          </a>
          <a href={`/?itemid=${playerdata.stats.item1}`}>
            <img
              src={`/images/item/${playerdata.stats.item1}.png`}
              alt="Item1"
            />
          </a>
          <a href={`/?itemid=${playerdata.stats.item2}`}>
            <img
              src={`/images/item/${playerdata.stats.item2}.png`}
              alt="Item2"
            />
          </a>
          <a href={`/?itemid=${playerdata.stats.item3}`}>
            <img
              src={`/images/item/${playerdata.stats.item3}.png`}
              alt="Item3"
            />
          </a>
          <a href={`/?itemid=${playerdata.stats.item4}`}>
            <img
              src={`/images/item/${playerdata.stats.item4}.png`}
              alt="Item4"
            />
          </a>
          <a href={`/?itemid=${playerdata.stats.item5}`}>
            <img
              src={`/images/item/${playerdata.stats.item5}.png`}
              alt="Item5"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Displaymatch;
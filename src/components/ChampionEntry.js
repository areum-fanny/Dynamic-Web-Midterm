import React from "react";
import Champions from "./Champions";

function ChampionEntry({ id }) {
  const championData = Champions[0].data[Champions[0].keys[id]];
  const championSpells = championData.spells;
  //function setdesc(desc) {

  return (
    <div className="ChampionEntry">
      <div className="ChampionImage">
        <img
          src={`/images/championSplash/${championData.id}_0.jpg`}
          alt="Icon"
        />
      </div>
      <p className="ChampionName">
        {championData.id}, {championData.title}
      </p>
      <p className="ChampionLore">"{championData.lore}"</p>
      <h2>Abilities</h2>
      <div className="ChampionAbilityList">
        <div className="ChampionAbility">
          <p className="ChampionAbilityCategory">Passive</p>
          <p className="ChampionAbilityName">{championData.passive.name}</p>
          <img className="ChampionAbilityImage" src={`/images/passive/${championData.passive.image.full}`} alt="Passive"/>
          <p className="ChampionAbilityDescription">{championData.passive.description}</p>
        </div>
        <div className="ChampionAbility">
        <p className="ChampionAbilityCategory">Q</p>
          <p>{championSpells[0].name}</p>
          <img src={`/images/spell/${championSpells[0].image.full}`} alt="Q" />
          <p className="ChampionAbilityDescription">{championSpells[0].description}</p>
        </div>
        <div className="ChampionAbility">
        <p className="ChampionAbilityCategory">W</p>
          <p>{championSpells[1].name}</p>
          <img src={`/images/spell/${championSpells[1].image.full}`} alt="W" />
          <p className="ChampionAbilityDescription">{championSpells[1].description}</p>
        </div>
        <div className="ChampionAbility">
        <p className="ChampionAbilityCategory">E</p>
          <p>{championSpells[2].name}</p>
          <img src={`/images/spell/${championSpells[2].image.full}`} alt="E" />
          <p className="ChampionAbilityDescription">{championSpells[2].description}</p>
        </div>
        <div className="ChampionAbility">
        <p className="ChampionAbilityCategory">R</p>
          <p>{championSpells[3].name}</p>
          <img src={`/images/spell/${championSpells[3].image.full}`} alt="R" />
          <p className="ChampionAbilityDescription">{championSpells[3].description}</p>
        </div>
      </div>
    </div>
  );
}
export default ChampionEntry;

import React from 'react';

import Champions from './Champions';

function ChampionEntry(){
    let id = 6;
    const championData = Champions[0].data[Champions[0].keys[id]];
    const championSpells = championData.spells;
    console.log(championSpells[0]);

    return (
        <div>
            <h1>{championData.id}, {championData.title}</h1>
            <p>"{championData.blurb}"</p>
            <p></p>
            <img src={`/images/champion/${championData.image.full}`} alt="Icon" />
            <div>
                <h2>Abilities</h2>
                <div>
                    <h3>Passive: {championData.passive.name}</h3>
                    <img src={`/images/passive/${championData.passive.image.full}`} />
                    <p>{championData.passive.description}</p>
                </div>
                <div>
                    <h3>Q: {championSpells[0].name}</h3>
                    <img src={`/images/spell/${championSpells[0].image.full}`} />
                    <p>{championSpells[0].description}</p>
                </div>
                <div>
                    <h3>W: {championSpells[1].name}</h3>
                    <img src={`/images/spell/${championSpells[1].image.full}`} />
                    <p>{championSpells[1].description}</p>
                </div>
                <div>
                    <h3>E: {championSpells[2].name}</h3>
                    <img src={`/images/spell/${championSpells[2].image.full}`} />
                    <p>{championSpells[2].description}</p>
                </div>
                <div>
                    <h3>R: {championSpells[3].name}</h3>
                    <img src={`/images/spell/${championSpells[3].image.full}`} />
                    <p>{championSpells[3].description}</p>
                </div>
            </div>         
        </div>
    );
}
export default ChampionEntry;

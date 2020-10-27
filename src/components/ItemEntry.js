import React from "react";
import Items from "./Items";

function ItemEntry({ id }) {
  const itemdata = Items[0].data[id];
  if (itemdata === undefined) return <div>No item found summoner!</div>;

  function createMarkup(data) {
    return { __html: data };
  }
  return (
    <div>
      <p>{itemdata.name}</p>
      <p>Buying Price: {itemdata.gold.base}</p>
      <p>Selling Price: {itemdata.gold.sell}</p>
      <img src={`/images/item/${id}.png`} alt={`${itemdata.name}`}></img>
      <p dangerouslySetInnerHTML={createMarkup(itemdata.description)}></p>
      <p>{itemdata.plaintext}</p>
      {itemdata.into !== undefined &&
        itemdata.into.map((key, i) => {
          return (
            <a key={i} href={`/?itemid=${key}`}>
              <img
                src={`/images/item/${key}.png`}
                alt={`${Items[0].data[key].name}`}
              ></img>
            </a>
          );
        })}
    </div>
  );
}
export default ItemEntry;

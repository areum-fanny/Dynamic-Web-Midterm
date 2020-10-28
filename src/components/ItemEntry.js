import React from "react";
import Items from "./Items";

function ItemEntry({ id }) {
  const itemdata = Items[0].data[id];
  if (itemdata == undefined) return <div>No item found summoner!</div>;
  function createMarkup(data) {
    return { __html: data };
  }
  return (
    <div className="Item">
      <div className="ItemEntry">
        <div className="ItemBasicInfo">
          <p className="ItemName">{itemdata.name}</p>
          <img
            className="ItemImage"
            src={`/images/item/${id}.png`}
            alt={`${itemdata.name}`}
          ></img>
          <p className="Itemprice">
            Buy: {itemdata.gold.base} Sell: {itemdata.gold.sell}
          </p>
          <p className="Itemtext">{itemdata.plaintext}</p>
        </div>

        <div className="ItemDescription">
          <p className="ItemDescriptionheading">DESCRIPTION</p>
          <p
            dangerouslySetInnerHTML={createMarkup(itemdata.description)}
            className="ItemDesc"
          ></p>
        </div>
        <div className="ItemForminto">
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
      </div>
    </div>
  );
}
export default ItemEntry;

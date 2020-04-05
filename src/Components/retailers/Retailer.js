import React from "react";

export default ({ Flowers, retailers, nurseries }) => {

    return (

        <section className="retailer">
            <h3 className="retailer__name">{retailers.name}</h3>
            <ul className="retailer__flowersList">
                Flowers:
      {Flowers.map(fl => (
                <li className="retailer__flower" key={Flowers.id}>
                    {fl.flower.color} {fl.flower.species} ${fl.price}
                </li>))}
            </ul>
            <ul className="retailer__nurseriesList">
                Nurseries:
      {nurseries.map(n => (
                <li className="retailer__nurseries" key={n.id}>{n.name}</li>
            ))}
            </ul>
        </section>
    )
}
import React from "react";

export default ({ nursery, Flowers, Distributors }) => {

    return (

        <section className="nursery">
            <h3 className="nursery__name">{nursery.name}</h3>
            <ul className="nursery__flowersList">
                Flowers
      {Flowers.map(fl => (
                <li className="nursery__flower" key={Flowers.id}>
                    {fl.flower.color} {fl.flower.species} ${fl.price}
                </li>))}
            </ul>
            <ul className="nursery__distributorsList">
                Distributors
      {Distributors.map(d => (
                <li className="nursery__distributor" key={Distributors.id}>{d.distributor.name}</li>
            ))}
            </ul>
        </section>
    )
};
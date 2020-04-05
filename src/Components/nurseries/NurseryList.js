import React, { useContext } from "react";
import { NurseryContext } from "./NurseryProvider";
import Nursery from "./Nursery";
// import "./Nursery.css";
import { NurseryDistributorContext } from "./NurseryDistributorProvider";
import { NurseryFlowerContext } from "./NurseryFlowerProvider"

export default props => {

    const { nurseries } = useContext(NurseryContext) || {}
    const { nurseryDistributors } = useContext(NurseryDistributorContext) || {}
    const { nurseryFlowers } = useContext(NurseryFlowerContext) || {}

    return (
        <div className="nurseries">
            <h1>Nurseries</h1>
            <article className="nurseryList">
                {nurseries.map(nursery => {
                    const distributors = nurseryDistributors.filter(
                        ndr => nursery.id === ndr.nurseryId
                    );
                    const flowers = nurseryFlowers.filter(
                        nf => nursery.id === nf.nurseryId
                    )

                    return (
                        <Nursery
                            key={nursery.id}
                            nursery={nursery}
                            Distributors={distributors}
                            Flowers={flowers}
                        />
                    );
                })}
            </article>
        </div>
    );
};
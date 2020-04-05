import React, { useContext } from "react";
import { NurseryContext } from "../nurseries/NurseryProvider";
import Distributor from "./Distributor";
// import "./Distributor.css";
import { NurseryDistributorContext } from "../nurseries/NurseryDistributorProvider";
import { NurseryFlowerContext } from "../nurseries/NurseryFlowerProvider"
import { RetailerContext } from "../retailers/RetailerProvider";
import { DistributorContext } from "./DistributorProvider";



export default props => {

    const { distributors } = useContext(DistributorContext) || {}
    const { retailers } = useContext(RetailerContext) || {}
    const { nurseries } = useContext(NurseryContext) || {}
    const { nurseryDistributors } = useContext(NurseryDistributorContext) || {}
    const { nurseryFlowers } = useContext(NurseryFlowerContext) || {}


    return (
        <div className="distributors">
            <h1>Distributors</h1>
            <article className="distributorList">
                {distributors.map(distributor => {
                    const retailerArray = retailers.filter(
                        retailer => distributor.id === retailer.distributorId
                    );
                    const nursDistArray = nurseryDistributors.filter(
                        nd => distributor.id === nd.distributorId
                    )

                    let foundFlowers = []

                    nursDistArray.map(ndr => {

                        const foundNursFlowArray = nurseryFlowers.filter(nf => nf.nurseryId === ndr.nurseryId)
                        foundNursFlowArray.map(fnfa => {
                            fnfa.price = fnfa.price * distributor.markup
                            fnfa.price = fnfa.price.toFixed(2)
                            foundFlowers.push(fnfa)
                        })
                    })




                    return (
                        <Distributor
                            key={distributor.id}
                            retailers={retailerArray}
                            distributor={distributor}
                            markup={distributor.markup}
                            Flowers={foundFlowers}
                        />
                    );
                })}
            </article>
        </div>
    );
};
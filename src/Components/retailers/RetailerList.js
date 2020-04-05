import React, { useContext } from "react";
import { NurseryContext } from "../nurseries/NurseryProvider";
import Retailer from "./Retailer";
// import "./Retailer.css";
import { NurseryDistributorContext } from "../nurseries/NurseryDistributorProvider";
import { NurseryFlowerContext } from "../nurseries/NurseryFlowerProvider"
import { RetailerContext } from "../retailers/RetailerProvider";
import { DistributorContext } from "../distributors/DistributorProvider";



export default props => {

    const { distributors } = useContext(DistributorContext) || {}
    const { retailers } = useContext(RetailerContext) || {}
    const { nurseries } = useContext(NurseryContext) || {}
    const { nurseryDistributors } = useContext(NurseryDistributorContext) || {}
    const { nurseryFlowers } = useContext(NurseryFlowerContext) || {}


    return (
        <div className="retailers">
            <h1>Retailers</h1>
            <article className="retailerList">
                {retailers.map(retailer => {

                    const nursDistArray = nurseryDistributors.filter(
                        nd => retailer.distributor.id === nd.distributorId
                    )

                    let foundFlowers = []
                    let foundNurseries = []
                    nursDistArray.map(ndr => {
                        const foundNursFlowArray = nurseryFlowers.filter(nf => nf.nurseryId === ndr.nurseryId)
                        foundNursFlowArray.map(fnfa => {
                            let foundedNurseries = nurseries.filter(nursery => fnfa.nurseryId === nursery.id)
                            foundedNurseries.map(fn => {
                                if (!(foundNurseries.includes(fn))) {
                                    foundNurseries.push(fn)
                                }
                            })
                            fnfa.price = fnfa.price * retailer.distributor.markup
                            fnfa.price = fnfa.price.toFixed(2)
                            foundFlowers.push(fnfa)
                        })
                    })
                    console.log(foundNurseries)




                    return (
                        <Retailer
                            key={retailer.id}
                            retailers={retailer}
                            distributor={retailer.distributor}
                            markup={retailer.distributor.markup}
                            Flowers={foundFlowers}
                            nurseries={foundNurseries}
                        />
                    );
                })}
            </article>
        </div>
    );
};
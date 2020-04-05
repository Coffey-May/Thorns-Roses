import React from "react";
import { Route } from "react-router-dom";
import { NurseryProvider } from "./nurseries/NurseryProvider";
import { NurseryFlowerProvider } from "./nurseries/NurseryFlowerProvider";
import { NurseryDistributorProvider } from "./nurseries/NurseryDistributorProvider";
import { DistributorProvider } from "./distributors/DistributorProvider";
import { RetailerProvider } from "./retailers/RetailerProvider";

import NurseryList from "./nurseries/NurseryList";
import DistributorList from "./distributors/DistributorList";
import RetailerList from "./retailers/RetailerList";

export default props => {
    return (
        <>
            <NurseryProvider>
                <NurseryFlowerProvider>
                    <NurseryDistributorProvider>
                        {/* <DistributorProvider> */}
                        <Route
                            exact
                            path="/"
                            render={props => {
                                return <NurseryList {...props} />;
                            }}
                        />
                        {/* </DistributorProvider> */}
                    </NurseryDistributorProvider>
                </NurseryFlowerProvider>
            </NurseryProvider>

            <DistributorProvider>
                <NurseryDistributorProvider>
                    <NurseryFlowerProvider>
                        <NurseryProvider>
                            <RetailerProvider>
                                <Route
                                    exact
                                    path="/distributors"
                                    render={props => {
                                        return <DistributorList {...props} />;
                                    }}
                                />
                            </RetailerProvider>
                        </NurseryProvider>
                    </NurseryFlowerProvider>
                </NurseryDistributorProvider>
            </DistributorProvider>

            <RetailerProvider>
                <DistributorProvider>
                    <NurseryDistributorProvider>
                        <NurseryFlowerProvider>
                            <NurseryProvider>
                                <Route
                                    exact
                                    path="/retailers"
                                    render={props => {
                                        return <RetailerList {...props} />;
                                    }}
                                />
                            </NurseryProvider>
                        </NurseryFlowerProvider>
                    </NurseryDistributorProvider>
                </DistributorProvider>
            </RetailerProvider>
        </>
    );
};
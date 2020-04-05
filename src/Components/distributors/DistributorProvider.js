import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const DistributorContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const DistributorProvider = (props) => {
    const [distributors, setDistributors] = useState([])

    const getDistributors = () => {
        return fetch("http://localhost:8088/distributors")
            .then(res => res.json())
            .then(setDistributors)
    }

    // const addDistributor = distributor => {
    //     return fetch("http://localhost:8088/distributors", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(distributor)
    //     })
    //         .then(getDistributors)
    // }

    /*
        Load all Distributors when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getDistributors()
    }, [])

    useEffect(() => {
        console.log("****  Distributor APPLICATION STATE CHANGED  ****")
    }, [distributors])

    return (
        <DistributorContext.Provider value={{
            distributors
        }}>
            {props.children}
        </DistributorContext.Provider>
    )
}
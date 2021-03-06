import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const NurseryDistributorContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const NurseryDistributorProvider = (props) => {
    const [nurseryDistributors, setNurseryDistributors] = useState([])

    const getNurseryDistributors = () => {
        return fetch("http://localhost:8088/nurseryDistributor?_expand=distributor")
            .then(res => res.json())
            .then(setNurseryDistributors)
    }

    // const addNursery = nursery => {
    //     return fetch("http://localhost:8088/nurseries", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(nursery)
    //     })
    //         .then(getNurseries)
    // }

    /*
        Load all Nurserys when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getNurseryDistributors()
    }, [])

    useEffect(() => {
        console.log("****  Nursery APPLICATION STATE CHANGED  ****")
    }, [nurseryDistributors])

    return (
        <NurseryDistributorContext.Provider value={{
            nurseryDistributors
        }}>
            {props.children}
        </NurseryDistributorContext.Provider>
    )
}
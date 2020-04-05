import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const NurseryContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const NurseryProvider = (props) => {
    const [nurseries, setNurseries] = useState([])

    const getNurseries = () => {
        return fetch("http://localhost:8088/nurseries")
            .then(res => res.json())
            .then(setNurseries)
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
        getNurseries()
    }, [])

    useEffect(() => {
        console.log("****  Nursery APPLICATION STATE CHANGED  ****")
    }, [nurseries])

    return (
        <NurseryContext.Provider value={{
            nurseries
        }}>
            {props.children}
        </NurseryContext.Provider>
    )
}
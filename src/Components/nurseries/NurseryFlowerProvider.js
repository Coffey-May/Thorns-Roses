import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const NurseryFlowerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const NurseryFlowerProvider = (props) => {
    const [nurseryFlowers, setNurseryFlowers] = useState([])

    const getNurseryFlowers = () => {
        return fetch("http://localhost:8088/nurseryFlower?_expand=flower")
            .then(res => res.json())
            .then(setNurseryFlowers)
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
        getNurseryFlowers()
    }, [])

    useEffect(() => {
        console.log("****  Nursery APPLICATION STATE CHANGED  ****")
    }, [nurseryFlowers])

    return (
        <NurseryFlowerContext.Provider value={{
            nurseryFlowers
        }}>
            {props.children}
        </NurseryFlowerContext.Provider>
    )
}
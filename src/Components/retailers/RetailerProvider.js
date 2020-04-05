import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const RetailerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const RetailerProvider = (props) => {
    const [retailers, setRetailers] = useState([])

    const getRetailers = () => {
        return fetch("http://localhost:8088/retailers?_expand=distributor")
            .then(res => res.json())
            .then(setRetailers)
    }

    // const addRetailer = Retailer => {
    //     return fetch("http://localhost:8088/retailers", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(Retailer)
    //     })
    //         .then(getretailers)
    // }

    /*
        Load all Retailers when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getRetailers()
    }, [])

    useEffect(() => {
        console.log("****  Retailer APPLICATION STATE CHANGED  ****")
    }, [retailers])

    return (
        <RetailerContext.Provider value={{
            retailers
        }}>
            {props.children}
        </RetailerContext.Provider>
    )
}
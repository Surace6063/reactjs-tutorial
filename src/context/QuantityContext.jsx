import { createContext, useContext, useEffect, useState } from "react";

// create context
export const QuantityContext = createContext()


export const QuantityProvider = ({children}) => {
    const [quantity,setQuantity] = useState(()=>{
        // getting quantity value from localstorage
       const qty = localStorage.getItem("quantity")
       
       // set initial quantity state value to qty if exists in localstorage else set 1
       return qty ? Number(qty) : 1
    })

    // save count to localstorage whenver count changes
    useEffect(()=>{
        localStorage.setItem("quantity",quantity)
    },[quantity])

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(quantity - 1)
    }

    return(
        <QuantityContext.Provider value={{quantity,increaseQuantity,decreaseQuantity}}>
            {children}
        </QuantityContext.Provider>
    )
}


export const useQuantity = () => {
    return useContext(QuantityContext)
}
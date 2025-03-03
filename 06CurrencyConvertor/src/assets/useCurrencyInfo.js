// part -1 custom hooks design 
import { useEffect, useState } from "react"


function useCurrencyInfo(currency){

    const [data, setData] = useState({})
    
    useEffect(() => {
        // api from json form to convert into string 
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)  
        .then((res) => res.json()) // json format mai aaya hai Data
        .then((res) => setData(res[currency])) 
        console.log(data);
    }, [currency])
    console.log("data : ", data);

    return data

}

export default useCurrencyInfo;



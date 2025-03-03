import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useLoaderData } from "react-router-dom";
// api call for github follower
// api call when component is loaded [useEffect]
function Github(){

    const  data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(()=>{

    //     fetch('https://api.github.com/users/AakashSahni')
    //     .then((res)=> res.json())
    //     .then((data)=> {
    //         console.log(data)
    //         setData(data)
    //     })

    // },[] )

    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl"> Github following : {data.following} 
        
        <img src={data.avatar_url} alt="Github" width={300} />

        </div>
    )
}

export default Github

//loader related concept
export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/AakashSahni')

    return response.json()
}
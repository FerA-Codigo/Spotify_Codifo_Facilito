import {createContext, useEffect, useState} from 'react'


export const ArtistContext=createContext();

export const ArtistProvider = ({children}) => {

    const[singer,setSinger] = useState('')

function DatosSinger(codigo,nombre,imagen){
    setSinger({codigo,nombre,imagen})
    window.localStorage.setItem("artist", JSON.stringify({codigo,nombre,imagen}))
    }

    useEffect(() => {
        if(singer !== ''){window.location = `/albums/${singer.codigo}`}
    },[singer])

    const data = {singer,DatosSinger}

    return(
        <ArtistContext.Provider value={data}>
        {children}
        </ArtistContext.Provider>
    )

}



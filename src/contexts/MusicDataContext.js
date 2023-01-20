import {createContext, useState} from 'react'


export const MusicDataContext=createContext();

export const MusicDataProvider = ({children}) => {

    const[music,setMusic] = useState('')

    function MusicData(response){
    setMusic(response)
    }

    const data = {music,MusicData}
    
    return(
        <MusicDataContext.Provider value={data}>
        {children}
        </MusicDataContext.Provider>
    )

}



import {createContext, useState} from 'react'


export const SingerDataContext=createContext();

export const SingerDataProvider = ({children}) => {

    const[singer,setSinger] = useState('hola mundo')

    function SingerData(response){
    setSinger(response)
    }

    const data = {singer,SingerData}
    
    return(
        <SingerDataContext.Provider value={data}>
        {children}
        </SingerDataContext.Provider>
    )

}



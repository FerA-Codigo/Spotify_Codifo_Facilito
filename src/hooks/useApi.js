import { useEffect, useState } from "react";
import axios from 'axios';

function useApi (url,parametros){

    const [datos,setDatos] = useState('')
    let token = window.localStorage.getItem("token")

const Consulta = async () => {
      try{
       const {data} = await axios.get(url,{
       headers:{Authorization: `Bearer ${token}`},
       params:{parametros}
       })
       data.items.length === 0 ? setDatos('No se encontraron datos.') : setDatos(data.items)
      

      } catch (error) {
          switch (error.response.status) {
            case 401:
                setDatos('El servidor tiene cerrada la sesión. Si está logueado haga click en "Salir" y vuelva a ingresar.');
                break;
            case 503:
                setDatos('El servidor de datos no se encuentra disponible. Intente más tarde');
                break;
            case 429:
                setDatos('Demasiadas solicitudes');
                break;      
            default:
                setDatos(`Error ${error.response.status}`);
                break;
        }
        console.log(error)
      }
       
    }

    useEffect(() => {
    Consulta()
    }, [])


    return datos
    }

export default useApi;    
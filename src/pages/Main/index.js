import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import ArtistList from "../../components/ArtistList";
import Portada from "../../components/Portada";
import FootBlock from "../../components/FootBlock";
import { SingerDataContext } from "../../contexts/SingerDataContext";
import useLogout from "../../hooks/useLogout";

const Main = () => {
   const [token, setToken] = useState("")
   const [searchKey,setSearchKey] = useState("")

   const {SingerData} = useContext(SingerDataContext)
   
   useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")
  
      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }
      
      setToken(token)
  }, []) 
 
const searchArtists = async (e) => {
   e.preventDefault()
   SingerData('');
   if (searchKey!==''){
   const {data} = await axios.get('https://api.spotify.com/v1/search', {
       headers:{Authorization: `Bearer ${token}`},
       params:{
           q: searchKey,
           type: "artist"
               }

   })
   SingerData(data.artists.items)
   }else{
      SingerData(''); 
   }
}

   return(
      <>
      <Portada/>
      <div className='containerDatos'>
      <Container>
        <Row className='d-flex justify-content-center '>
           
           <Col md={12} className='text-center mt-5'>
               <h2 style={{fontWeight: '300'}}>Toda la data de tus artistas favoritos</h2></Col>
            <Col md={12} className='text-center mt-2'>
            {!token?
               <a href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`}><Button variant='outline-primary' size='lg'>Acceder</Button></a>
            :
            <Button onClick={useLogout} variant='outline-primary' size='sm'>Cerrar Sesión</Button>  

            }  
           </Col>
           <Col md={4}className='mt-5'>
            {token ?
               <Form onSubmit={searchArtists}>
                     <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Artista:</InputGroup.Text>
                        <Form.Control
                           placeholder="Nombre"
                           onBlur={e => setSearchKey(e.target.value)}
                        />
                     <Button type={"submit"} variant="outline-secondary" id="button-addon2">
                        Buscar
                     </Button>   
                     </InputGroup>
                     
               </Form>
               :
               null
            }
           </Col>
           <Col md={12}className='text-center mt-2'>
            {token ?
            <Row><ArtistList buscado={searchKey}/></Row>
            :
            null
            }

           </Col>

        </Row>
      </Container>
      <FootBlock/>
      </div>
      </>
   )

}

export default Main
import { Link, useParams } from "react-router-dom"
import { Button, Col, Container, Row } from "react-bootstrap";
import PortadaArtista from "../../components/PortadaArtista";
import AlbumList from "../../components/AlbumList";
import useLogout from "../../hooks/useLogout";
import FootBlock from "../../components/FootBlock";
import useApi from "../../hooks/useApi";
import { useContext, useEffect } from "react";
import { MusicDataContext } from "../../contexts/MusicDataContext";

const Album = () => {

   const singer = JSON.parse(window.localStorage.getItem("artist"))
   let token = window.localStorage.getItem("token")

   const {id} = useParams()
   const {music,MusicData} = useContext(MusicDataContext)

   const listado = useApi(`https://api.spotify.com/v1/artists/${id}/albums`,'include_groups: "album"')

   useEffect(() => {
    if(Array.isArray(listado)){ MusicData(listado)}
  }, [listado])

return(
   <>
   <PortadaArtista image = {singer.imagen} name={singer.nombre}/>
   <Container>
   <Row className ='text-center mb-5'>
      {token?<Col md={12} className='mb-3 mt-3'><Link to='/'><Button variant='outline-light' size='sm'>Nueva búsqueda</Button></Link> <Button onClick={useLogout} variant='outline-primary' size='sm'>Cerrar Sesión</Button></Col>:null}
    {Array.isArray(music) ? <AlbumList albumes={music}/> : <Col md={12} className='mt-5 mb-5'><h3>{`${music}`}</h3><br/><br/></Col>}
  </Row>
   {console.log (music)}
   </Container>
   <FootBlock/>
   </>   
 )
}

export default Album
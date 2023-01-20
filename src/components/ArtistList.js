import { useContext } from 'react'
import { Card, Col } from 'react-bootstrap'
import {ArtistContext} from '../contexts/ArtistContext'
import { SingerDataContext } from "../contexts/SingerDataContext";
import noImagen from '../img/no-imagen.jpg'
import noImagenBack from '../img/no-imagen-back.jpg'


const ArtistList = ({buscado}) => {

  const {DatosSinger} = useContext(ArtistContext)
  const {singer} = useContext(SingerDataContext)

    if(Array.isArray(singer)){
    return singer.map((e) => (

        e.name.toLowerCase().includes(buscado.toLowerCase()) !== false ? 

        <Col lg={3} md={6} key={e.id}>
        <Card className='GrBack2 mt-2 mb-2' >
        {e.images.length ? 
            <div className ='imageArtist' style={{backgroundImage:`url(${e.images[0].url})`}}></div>  
            : 
            <div className ='imageArtist' style={{backgroundImage:`url(${noImagen})`}}></div>}
        <Card.Body>
          <Card.Title className='cardTitle'>{e.name}</Card.Title>
          

        </Card.Body>
        <ul className="list-group list-group-flush">
          <li className="list-group-item cardItem">Seguidores: {e.followers.total}</li>
          <li className="list-group-item cardItem">Géneros:<br/>{e.genres.toString()}</li>
          <li className="list-group-item cardItem">Popularidad: {e.popularity}</li>
        </ul>
        <Card.Body>
          {e.images.length ?
            <button onClick={() => DatosSinger(e.id,e.name,e.images[0].url)} className='btn btn-outline-warning btn-sm'>Albumes</button>
            :
            <button onClick={() => DatosSinger(e.id,e.name,noImagenBack)} className='btn btn-outline-warning btn-sm'>Albumes</button>

          }
        </Card.Body>
        </Card>
        
        </Col>
        :
        null
    ))    
    }   
 }

export default ArtistList
import { Card, Col } from 'react-bootstrap'
import noImagen from '../img/no-imagen.jpg'


const AlbumList = ({albumes}) => {

    if(Array.isArray(albumes)){  
  return albumes.map((e) => (
        <Col lg={3} md={6} key={e.id}>
        <Card className='GrBack2 mt-2 mb-2' >
        {e.images.length ? 
            <div className ='imageArtist' style={{backgroundImage:`url(${e.images[0].url})`}}></div>  
            : 
            <div className ='imageArtist' style={{backgroundImage:`url(${noImagen})`}}></div>
        }
        <Card.Body>
          <Card.Title className='cardTitle'>{e.name}</Card.Title>
        </Card.Body>
        <ul className="list-group list-group-flush">
          <li className="list-group-item cardItem">Lanzamiento: {e.release_date}</li>
          <li className="list-group-item cardItem">Tipo: {e.type}</li>
          <li className="list-group-item cardItem">Tracks: {e.total_tracks}</li>
        </ul>
        <Card.Body>
          <a href={e.external_urls.spotify} rel="noreferrer" target='_blank'>Escuchar en Spotify</a>
        </Card.Body>
        </Card>
        </Col>
    )) 
    }else{
        <Col md={12}><h3>Error en la captura de datos</h3></Col> 
    }   
    }   


export default AlbumList
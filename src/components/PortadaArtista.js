import { Col, Container } from 'react-bootstrap'
import logo from '../img/portada_logo.png'
const PortadaArtista = ({image,name}) => {
    return(
        <>
        <div className='containerFluid portadaArtista' style={{backgroundImage:`url(${image})`}}></div>
        <Container className='artistaTitulo'>
        <Col md={12} className='text-center' style={{marginTop:'-7%'}}>
            <img style={{zIndex:'999'}} className='logo img-fluid' src={logo} alt='logo' width={'1000'} />
        </Col>
        <Col md={12}>{name}</Col>
       </Container>
       </>
       
    )
}
export default PortadaArtista
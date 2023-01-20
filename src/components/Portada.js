import { Container } from "react-bootstrap"
import background from '../img/background.jpg'
import portada3 from '../img/portada_img3.png'
import portada2 from '../img/portada_img2.png'
import portada1 from '../img/portada_img1.png'
import portadaMobil from '../img/portada_mobil.png'
import logo from '../img/portada_logo.png'
const Portada = () => {
    return(
        <>
        <div className='containerFluid portada' style={{backgroundImage:`url(${background})`}}>
            <Container className='content'>
            <img className='item3 img-fluid' src={portada3} alt='portada3' width={'1000'} data-aos="zoom-in-up" data-aos-offset="200" data-aos-delay="700" data-aos-duration="3000"/>
            <img className='item2 img-fluid' src={portada2} alt='portada2' width={'1000'} data-aos="zoom-in-up" data-aos-offset="200" data-aos-delay="500" data-aos-duration="2000"/>
            <img className='item1 img-fluid' src={portada1} alt='portada1' width={'1000'} data-aos="zoom-in-up" data-aos-offset="200" data-aos-delay="100" data-aos-duration="1000"/>
            <img className='logo img-fluid' src={logo} alt='logo' width={'1000'} data-aos="fade-up" data-aos-offset="200" data-aos-delay="2000" data-aos-duration="1000"/>
            </Container>
        </div>
        <div className='containerFluid portadaMobil'>
        <img className='item3 img-fluid' src={portadaMobil} alt='portada3' width={'1000'}/>
        </div>
        </>
    )
}
export default Portada
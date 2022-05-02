import React from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import Products from './Products';

const Home = () => {
    return (
        <>
            <Card className="bg-dark text-dark border-0">
                <Card.Img src="https://img.freepik.com/fotos-gratis/foto-de-estudio-de-gengibre-hippie-com-barba-grossa-corte-de-cabelo-da-moda-tem-uma-expressao-seria-aponta-com-o-dedo-indicador-no-canto-superior-direito_273609-18616.jpg?t=st=1650924012~exp=1650924612~hmac=26530273066bc9513456ce0b0e16e4091dc3701985dae6de0d3eb974d837d69f&w=740"
                    alt="Background"
                    height="550px"
                    width="100%"
                    style={{inlineSize: 'max-content'}}
                />
                <Card.ImgOverlay className="d-flex flex-column justify-content-center">
                    <Container>
                        <Card.Title className="display-3 fw-bolder mb-0" >CHEGADA DA NOVA TEMPORADA</Card.Title>
                        <Card.Text className="lead fs-2 color-dark">
                            CONFIRA TODAS AS TENDÊNCIAS
                        </Card.Text>
                        <Button variant='dark' className='btn btn-outline-light px-5 py-3 fs-4'>Confira agora!</Button>
                    </Container>
                </Card.ImgOverlay>
            </Card>
            <Products />
        </>
    )
}

export default Home;
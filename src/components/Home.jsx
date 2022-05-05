import React from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import ImgHome from '../assets/home.png'
import Products from './Products';

const Home = () => {
    return (
        <>
            <Card className="d-flex justify-content-center text-dark border-0" 
            style={{ 
                background:'#CCC',  
                height: 'auto', 
                minHeight: '350px'
            }}>
                <Card.Img src={ImgHome}
                    alt="Background"
                    style={{
                        paddingLeft: '30px', 
                        width: '35%', 
                        minWidth: '350px'
                    }}/>
                <Card.ImgOverlay className="d-flex flex-column justify-content-center">
                    <Container>
                        <Card.Title className="display-4 fw-bolder mb-0" >CHEGADA DA NOVA TEMPORADA</Card.Title>
                        <Card.Text className="lead fs-2 color-dark">
                            CONFIRA TODAS AS TENDÊNCIAS
                        </Card.Text>
                        <Button variant='dark' className='btn btn-outline-light px-4 py-2 fs-4'>Confira agora!</Button>
                    </Container>
                </Card.ImgOverlay>
            </Card>
            <Products />
        </>
    )
}

export default Home;
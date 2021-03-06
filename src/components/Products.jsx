import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import { Card, Button, Col, Container, Form, Row } from 'react-bootstrap';


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState('todos');
    const [filterNone, setFilterNone] = useState(true);

    useEffect(() => {
        const scrollListener = () => {
            if (window.innerWidth > 485) {
                setFilterNone(true);
            } else {
                setFilterNone(false);
            }
        };

        window.addEventListener("resize", scrollListener);

        return () => {
            window.removeEventListener("resize", scrollListener);
        };
    }, []);



    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:3333/episodes`);

            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const ShowProducts = () => {
        const filterProduct = (cat) => {
            console.log('Resposta', cat)
            setActive(cat);
            const updatedList = data.filter((e) => e.category === cat);
            if (cat == 'todos') {
                setFilter(data)
            } else {
                setFilter(updatedList);
            }
        }
        return (
            <>
                <Container className={filterNone ? 'buttons d-flex justify-content-center mb-4 pb-4' : 'd-none'}>
                    <Button
                        variant='outline-dark me-2'
                        className={active === "todos" && 'btn-outline-dark active me-2'}
                        onClick={() => filterProduct("todos")}>Todos</Button>
                    <Button
                        variant='outline-dark me-2'
                        className={active === "masculino" && 'btn-outline-dark active '}
                        onClick={() => filterProduct("masculino")}>Masculino</Button>
                    <Button
                        variant='outline-dark me-2'
                        className={active === "feminino" && 'btn-outline-dark active me-2'}
                        onClick={() => filterProduct("feminino")}>Feminino</Button>
                    <Button
                        variant='outline-dark me-2'
                        className={active === "joias" && 'btn-outline-dark active me-2'}
                        onClick={() => filterProduct("joias")}>J??ias</Button>
                    <Button
                        variant='outline-dark me-2'
                        className={active === "eletronicos" && 'btn-outline-dark active me-2'}
                        onClick={() => filterProduct("eletronicos")}>Eletr??nicos</Button>
                </Container>

                <Container className={filterNone ? 'd-none' : 'd-flex pb-3'}>
                    <Form.Select value={active} onChange={(ev) => filterProduct(ev.target.value)}>
                        <option value="todos">Todos</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="joias">Joias</option>
                        <option value="eletronicos">Eletr??nicos</option>
                    </Form.Select>
                </Container>
                {filter.map((product) => {
                    let title = product.title;
                    if (title.length > 14) {
                        title = title.substring(0, 14) + `...`;
                    }
                    return (
                        <>
                            <Col className='md-4 mb-4 d-flex justify-content-center'>
                                <Card className="text-center p-3" style={{ width: '15rem' }} key={product.id}>
                                    <Card.Img variant="top" src={product.image} alt={product.title} height='200px' />
                                    <Card.Body>
                                        <Card.Title className='mb-0'>{title}</Card.Title>
                                        <Card.Text className='fw-bold'>${product.price}</Card.Text>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Comprar agora</NavLink>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </>
                    )
                })

                }
            </>
        )
    }

    return (
        <Container className='py-5'>
            <Row>
                <Col>
                    <h1 className='display-6 fw-bolder text-center'>Produtos mais recentes</h1>
                    <hr />
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <ShowProducts />
            </Row>
        </Container>
    )
}

export default Products;
'use client'

import Pagina from "@/app/components/Pagina";
import apiMovie from "@/services/apiMovies";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";


export default function Page(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        apiMovie.get(`movie/popular`).then(resultado => {
            setFilmes(resultado.data.results)
        })
    }, [])

    return(
        <Pagina titulo="Filmes em Cartaz">
            <Row md={4}>
            {filmes.map(item => (
                <Col className="mb-3" key={item.id}>
                    <Card style={{ height: '100%' }} className="h-100 d-flex flex-column">
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.original_title}</Card.Text>
                            <Card.Text><b>Popularidade:</b> {item.popularity}</Card.Text>
                            <div className="mt-auto">
                                <Button href= {`filmes/${item.id}`} variant="danger">Ver Detalhes</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </Pagina>
    )
}

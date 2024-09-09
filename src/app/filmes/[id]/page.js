'use client'

import Pagina from "@/app/components/Pagina";
import apiMovies from "@/services/apiMovies";


import { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";

export default function Disney({ params }) {

    const [filme, setFilme] = useState({})
    const [ator, setAtor] = useState([])

    useEffect(() => {
        apiMovies.get(`movie/${params.id}`).then(resultado => {
            setFilme(resultado.data)
        })
    }, [])

    useEffect(() => {
        apiMovies.get(`movie/${params.id}/credits`).then(resultado => {
            setAtor(resultado.data.cast)
        })
    }, [])

    return (
        <Pagina>

            <h1>{filme.title}</h1>
            <Row>
                <Col md={4}>
                    <Card style={{ width: '100%' }} >
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                    </Card>
                </Col>
                <Col md={8}>
                    <p><b>Título Original: </b> {filme.original_title}</p>
                    <p><b>Popularidade: </b> {filme.popularity}</p>
                    <p><b>Data de Lançamento: </b> {filme.release_date}</p>
                    <p><b>Orçamento: </b> {filme.revenue}</p>
                    <p><b>Gêneros: </b> {filme.genres && filme.genres.map(genero => genero.name).join(', ')}</p>
                    <p><b>Sinopse: </b> {filme.overview}</p>

                    <Button href="/filmes">Voltar</Button>
                </Col>
            </Row>

            <h1 className="mt-5 mb-2">Atores</h1>
            <Row md={6}>
                {ator.map(item => (
                    <Col className="mb-3" key={item.id}>
                        <Card style={{ height: '100%' }} className="h-100 d-flex flex-column">
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                        </Card>
                    </Col>
                ))}
            </Row>



        </Pagina>

    )
}
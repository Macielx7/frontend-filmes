'use client'

import Pagina from "@/app/components/Pagina";
import apiMovies from "@/services/apiMovies";


import { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";

export default function Disney({ params }) {

    const [ator, setAtor] = useState({})
    const [filme, setFilme] = useState([])

    useEffect(() => {
        apiMovies.get(`person/${params.id}`).then(resultado => {
            setAtor(resultado.data)
        })
    }, [])

    useEffect(() => {
        apiMovies.get(`person/${params.id}/movie_credits`).then(resultado => {
            setFilme(resultado.data.cast)
        })
    }, [])

    return (
        <Pagina>

            <h1>{ator.Name}</h1>
            <Row>
                <Col md={4}>
                    <Card style={{ width: '100%' }} >
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                    </Card>
                </Col>
                <Col md={8}>
                    <p><b>Data de Nascimento: </b> {ator.birthday}</p>
                    <p><b>Local de Nascimento: </b> {ator.place_of_birth}</p>
                    <p><b>Popularidade: </b> {ator.popularity}</p>
                    <p><b>Biografia: </b> {ator.biography}</p>

                    <Button href="/atores">Voltar</Button>
                </Col>
            </Row>


            <h1 className="mt-5 mb-2">Filmes</h1>
            <Row md={6}>
                {filme.map(item => (
                    <Col className="mb-3" key={item.id}>
                        <Card style={{ height: '100%' }} className="h-100 d-flex flex-column">
                            <a href={`atores/${item.id}/movie_credits`}>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
            



        </Pagina>

    )
}
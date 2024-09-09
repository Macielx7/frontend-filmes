'use client'

import Pagina from "@/app/components/Pagina";
import apiMovies from "@/services/apiMovies";


import { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";

export default function Disney({ params }) {

    const [serie, setSerie] = useState({})
    const [temporadas, setTemporadas] = useState([])
    const [ator, setAtor] = useState([])

    useEffect(() => {
        apiMovies.get(`tv/${params.id}`).then(resultado => {
            setSerie(resultado.data)
        })
    }, [])
    
    useEffect(() => {
        apiMovies.get(`tv/${params.id}`).then(resultado => {
            setTemporadas(resultado.data.seasons)
        })
    }, [])

    useEffect(() => {
        apiMovies.get(`tv/${params.id}/credits`).then(resultado => {
            setAtor(resultado.data.cast)
        })
    }, [])

    return (
        <Pagina>

            <h1>{serie.name}</h1>
            <Row>
                <Col md={4}>
                    <Card style={{ width: '100%' }} >
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + serie.poster_path} />
                    </Card>
                </Col>
                <Col md={8}>
                    <p><b>Título Original: </b> {serie.original_name}</p>
                    <p><b>Popularidade: </b> {serie.popularity}</p>
                    <p><b>Data de Lançamento: </b> {serie.release_date}</p>
                    <p><b>Orçamento: </b> {serie.revenue}</p>
                    <p><b>Gêneros: </b> {serie.genres && serie.genres.map(genero => genero.name).join(', ')}</p>
                    <p><b>Sinopse: </b> {serie.overview}</p>

                    <Button href="/series">Voltar</Button>
                </Col>
            </Row>

            <h1 className="mt-5 mb-2">Temporadas</h1>
            <Row md={6}>
            {temporadas.map(item => (
                <Col className="mb-3" key={item.id}>
                    <Card style={{ height: '100%' }} className="h-100 d-flex flex-column">
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                    </Card>
                </Col>
            ))}
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
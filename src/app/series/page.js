
'use client'

import Pagina from "@/app/components/Pagina";
import apiMovie from "@/services/apiMovies";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";


export default function Page(){

    const [series, setSeries] = useState([])

    useEffect(() => {
        apiMovie.get(`tv/popular`).then(resultado => {
            setSeries(resultado.data.results)
        })
    }, [])

    return(
        <Pagina titulo="Séries">
            {series.map(item => (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.poster_path} />
                <Card.Body>
                  <Card.Title>{item.original_name}</Card.Title>
                  <Card.Text>
                  </Card.Text>
                  <Button variant="primary">Detalhes</Button>
                </Card.Body>
              </Card>
            ))}
            
        </Pagina>
        
    )
}
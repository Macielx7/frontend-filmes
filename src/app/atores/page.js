
'use client'

import Pagina from "@/app/components/Pagina";
import apiMovie from "@/services/apiMovies";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";


export default function Page(){

    const [atores, setAtores] = useState([])

    useEffect(() => {
        apiMovie.get(`movie/popular`).then(resultado => {
            setAtores(resultado.data.results)
        })
    }, [])

    return(
        <Pagina titulo="Atores">
            {atores.map(item => (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.poster_path} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <div>
                    <b>Popularidade</b>: {item.popularity}
                    </div>
                    <div>
                    <b>Data</b>: {item.popularity}
                    </div>
                  </Card.Text>
                  <Button variant="primary">Detalhes</Button>
                </Card.Body>
              </Card>
            ))}
            
        </Pagina>
        
    )
}
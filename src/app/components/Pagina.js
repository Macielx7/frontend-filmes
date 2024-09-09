import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Pagina(props){
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                         <NavDropdown title="Filmes" id="disney-dropdown">
                            <NavDropdown.Item href="/filmes">Filmes Populares</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Séries/Tv" id="disney-dropdown">
                            <NavDropdown.Item href="/series">Séries Populares</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Atores/Atrizes" id="disney-dropdown">
                            <NavDropdown.Item href="/atores">Atores Populares</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>  
                </Container>
            </Navbar>

            
            <Container className="text-black text-left p-3">
                <h1>{props.titulo}</h1>
            </Container>
            

            <Container>
                {props.children}
            </Container>

        </>
        
    )
}
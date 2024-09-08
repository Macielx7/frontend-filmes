import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Pagina(props){
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/filmes">Filmes</Nav.Link>
                        <Nav.Link href="/series">Series</Nav.Link>
                        <Nav.Link href="/atores">Atores</Nav.Link>
                        
                         
                         <NavDropdown title="Filmes" id="disney-dropdown">
                            <NavDropdown.Item href="#">Populares</NavDropdown.Item>
                            <NavDropdown.Item href="#">Populares</NavDropdown.Item>
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
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom"; //magic portal >:D
import '../style.css';

//define props in an interface
interface MovieCardProps {
    id: number,
    title: string,
    poster: string, //Img src is just a string
    year: number
};
//destructured the props inside the function signiture
export default function MovieCard({ id, title, poster, year }: MovieCardProps) {

    return(
        <Container fluid>
            <Row>
                <Col md={3}>
                <Link to={`/movie/${id}`} style={{ textDecoration: 'none', color: 'inherit'}}>
                    <div className="movieItem">
                        <img src={poster} alt={`${title} movie poster`}/>
                        <h3>{title}</h3>
                        <p>{year}</p>
                    </div>
                </Link>
                </Col>
            </Row>
        </Container>
        
    );

}
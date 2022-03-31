import { CardGroup, Col, Row } from "react-bootstrap";
import { MovieCard } from "./MovieCard";

export const MoviesList = ({movies}) => (

     
    <Row xs={1} md={5} className="g-4">{movies.map(movie => <Col><MovieCard movie={movie}/></Col>) }</Row>
    
);
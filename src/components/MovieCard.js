import { Button, Card } from "react-bootstrap";

export const MovieCard = ({movie:{title,overview,poster_path}}) => (
    //https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg   || w500 => size
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
               {overview}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
);


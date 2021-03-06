import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


export const MovieCard = ({ movie: { id, title, release_date, poster_path } }) => {

    const dateExtenso = new Date(release_date);

    //https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg   || w500 => size
    return (
        <Link to={`/movie/${id}`} style={{textDecoration: 'inherit', color: 'inherit'}}>
            <Card
                key={id}
                style={{ width: '18rem', cursor: 'pointer' }}
            >
                <Card.Img  variant="top" src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
                <Card.Body>
                    <Card.Title
                        style={{ cursor: 'pointer' }}
                    >{title}</Card.Title>
                    <Card.Text>
                        {dateExtenso.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};


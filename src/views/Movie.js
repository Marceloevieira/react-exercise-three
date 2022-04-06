import { Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";

export const Movie = () => {
    const { id } = useParams();
    const movie = useMovie(id);
    const { credits, genres } = movie;


    const minutoToHour = (minutos) => {
        const horas = Math.floor(minutos / 60);
        const min = minutos % 60;
        const textoHoras = (`00${horas}`).slice(-2);
        const textoMinutos = (`00${min}`).slice(-2);

        return `${textoHoras}h ${textoMinutos}m`;
    }

    //https://www.disneyplus.com/pt-br/movies/turning-red/4mFPCXJi7N2m
    //console.log(movie);


    return (
        <main
            className={'align-center text-white container'}
        >
            <div
                className={'back-ground-movie'}
            >
                <img
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    style={{ width: '100vw' }}
                />
                <div className={'darknes-background'}> </div>
            </div>

            <Row>
                <Col >
                    <Image
                    fluid
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}></Image>
                </Col>
                <Col md={9}>
                    <p
                        className={'shadow-lg  rounded text-start'}
                    >
                        <h2>{movie.title}</h2>
                        <ul
                            className={'d-flex align-items-center '}
                        >
                            <li
                                className={'flex-fill'}
                            >
                                <span
                                    className={'certification'}
                                >
                                    L
                                </span>
                            </li>
                            <li
                                className={'flex-fill'}
                            >
                                {typeof genres !== 'undefined' && genres.map((g, i) => g.name + (i+1 < genres.length?', ':''))}
                            </li>
                            <li
                                className={'flex-fill'}
                            >
                                {minutoToHour(movie.runtime)}
                            </li>
                        </ul>
                    </p>
                    <ul
                        className={'d-flex align-items-center shadow-lg rounded '}
                        style={{ listStyleType: 'none', listStylePosition: 'inside' }}
                    >
                        <li
                            className={'px-2'}
                        >
                            <span
                                className={"rating-border"}
                                style={{ background: `conic-gradient(green ${(movie.vote_average * 100) / 10}%, transparent 0 100%)` }}
                            >
                                <span
                                    className={"rating-content"}
                                >
                                    {Math.round((movie.vote_average * 100) / 10)}%
                                </span>
                            </span>
                        </li>
                        <li
                            className={'px-2'}
                        >
                            Avaliação
                            <br></br>
                            dos
                            <br></br>
                            usuários
                        </li>
                    </ul>
                    <h3
                        className={'shadow-lg  rounded text-start'}
                    >
                        {movie.tagline}
                    </h3>
                    <h3 className={'shadow-lg  rounded text-start'}
                    >
                        Sinopse
                    </h3>
                    <p className={'shadow-lg rounded '}>
                        {movie.overview}
                    </p>

                    <ul
                        className={'d-flex shadow-lg rounded mx-0 px-0'}
                        style={{ listStyleType: 'none', listStylePosition: 'inside', overflowY: 'hidden', overflowX: 'scroll' }}
                    >

                        {typeof credits !== 'undefined' && credits.crew.filter((p) => p.job.includes('Director')).map((person) => {

                            return (
                                <li
                                    className={'px-2 flex-fill'}
                                >
                                    <p>{person.name}</p>
                                    <p>{person.job}</p>
                                </li>
                            )
                        })}
                        <li>

                        </li>
                    </ul>
                </Col>
            </Row>
            <Row >
                <Col
                >

                </Col>
            </Row>
            <Row
                className={'pt-5'}
            >
                <Col>
                    <h3 className={'shadow-lg rounded'}>Elenco Principal</h3>
                    <ol
                        className={'d-flex shadow-lg rounded'}
                        style={{ listStyleType: 'none', listStylePosition: 'inside', overflowY: 'hidden', overflowX: 'scroll' }}
                    >
                        {typeof credits !== 'undefined' && credits.cast.map((person) => {

                            return (
                                <li
                                    className={'px-2'}
                                >
                                    <a>
                                        <Image src={`https://image.tmdb.org/t/p/w138_and_h175_face${person.profile_path}`}></Image>
                                    </a>
                                    <p>{person.name}</p>
                                    <p>{person.character}</p>
                                </li>
                            )
                        })}

                    </ol>
                </Col>

            </Row>

        </main>
    );
};


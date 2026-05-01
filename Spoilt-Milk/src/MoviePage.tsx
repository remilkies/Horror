import React, { useState } from 'react'
import './style.css'
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

import MovieCard from './components/MovieCard'

interface HorrorMovie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;

    //custom props :P
    myReview?: string;
    myRating?: number;
}

export default function MoviePage() {

    //movie searchbar
    const [searchQuery, setSearchQuery] = useState("");

    const [movies, setMovies] = useState<HorrorMovie[]>([]);

    const searchTMDB = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log(`🔪 Hunting for: ${searchQuery}...`);

        const sacredKey = import.meta.env.VITE_TMDB_KEY
        
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${sacredKey}&query=${searchQuery}`
            );

            const data = await response.json();

            //SAVE TO THE REACT STATE, HAVE I DONE THING AMILLION TIMES??YES, BUT I'MM STILL GONNA COMMENT THE DUCK OUTTA THIS SHI o7
            setMovies(data.results);
            console.log("🩸 Payload secured!", data.results);
        } catch (error) {
            console.log("💀 The API call died:", error);
        }
    };

    return (
        <Container fluid>
            <h1>Editor's Choice</h1>
            <h2>Can you tell that I love found-footage yet?</h2>

            <Form onSubmit={searchTMDB} className='mb-4 d-flex'>
                <Form.Control
                    type='text'
                    placeholder='Search for a nightmare...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}//updates shi as you type
                />

                <Button variant='danger' type='submit'>
                    Hunt
                </Button>
            </Form>

            <Row>
                {movies.map((movie) => (
                    movie.myReview ? ( //HAVE I REVIEWED THIS SHIT
                        //render card review

                        <Col md={3}>
                            <MovieCard
                                key={movie.id} //REACT unique key for mapped movies
                                title={movie.title}
                                poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                year={parseInt(movie.release_date?.substring(0, 4) || "0")} //extracts just the year from year-month-day thingy
                                review={movie.myReview}
                            />
                        </Col>

                    ) : (
                        <div key={movie.id} style={{ border: '1px dashed grey', padding: '10px', margin: '10px' }}>
                            <h4>{movie.title}</h4>
                            <p>Yet to be rated...coming soon!</p>
                        </div>
                    )

                ))}
            </Row>
        </Container>

    )
}
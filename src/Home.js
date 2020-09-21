import React, {useEffect, useState} from 'react'
import './Home.css';
import { useStateValue } from './StateProvider';
import Movie from './Movie';

function Home() {

    const [{movies}, dispatch] = useStateValue();
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const url = "http://api.themoviedb.org/3/movie/top_rated?api_key=8e415b145ffee24fe75157161d6feaf3&language=en-US&page=1";

        fetch(url)
        .then(response => response.json())
        .then(data => (
            dispatch({
                type: 'ADD_MOVIE',
                item: data.results[0]
            })
        ))
        
    }, [])

    //popularity
        
        const accessInfo = () => {
            console.log(movieList[0].video);
        }

        console.log(movies[0]);

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__movie__row">
                    <Movie
                    img={'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'}
                    rating={7.8}
                    title={'Joker'}
                    />
                    <Movie 
                    img={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'}
                    rating={8.5}
                    title={'Parasite'}
                    />
                    {/* CODE below: */}
                    <Movie 
                    img={`https://image.tmdb.org/t/p/w500${movies[0].poster_path}`}
                    rating={2}
                    title={'linas'}
                    / >
                </div>
                <div className="home__movie__row">
                    
                </div>
                <div className="home__movie__row">
                    
                </div>
                <button onClick={accessInfo}>Button</button>
            </div>
        </div>
    )
}

export default Home;

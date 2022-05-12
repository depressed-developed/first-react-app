import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
//aa5a1a0c

const API_URL = 'http://www.omdbapi.com?apikey=aa5a1a0c'



const App = () =>{
    
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    

    useEffect(() =>{
        searchMovies('');
        
    },[]);

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
        console.log(data)
    }
    
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div> 

            {movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

            
        </div>
    );
}

export default App;
import { useState } from "react"


export const SearchMovies = () => {

  let api_key = 'c35f6c6e915c404b90e06fe7568da9b1';
  let url_base = 'https://api.themoviedb.org/3/search/movie';

  const [search, setSearch] = useState('');
  const [moviesData, setMoviesData] = useState([]);

  const handleSearchMovies = (e) => {
    setSearch(e.target.value)
  }
  const deleteContent= () => {
    setSearch('')
    setMoviesData([])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchMovies()
  }
  
  const fetchMovies = async () => {
    try {
      const response = await fetch(`${url_base}?query=${search}&api_key=${api_key}`)
      const data = await response.json()
      setMoviesData(data.results) 
      }catch (error) {
      console.error('ocurrio el siguiente error:',error)
    }
  }


    return (
      <div className="container">
        <h1>Search Movies</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Movies"
            value={search}
            onChange={handleSearchMovies}
          />
          <button type="submit">Search</button>
          <button onClick={deleteContent} className="delete" >Delete</button>
        </form>

         
       
        <div className="movie-list">
          {moviesData.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
              <h2>{movie.title} </h2> 
              <p>{movie.overview}  </p>
            </div>
         ))}
            
          </div>
        </div>
  )
}

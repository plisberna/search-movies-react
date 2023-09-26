import React from 'react'
import ReactDOM from 'react-dom/client'
import './stylesGlobal/stylesGlobal.css'
import { SearchMovies } from './components/SearchMovies'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchMovies />
  </React.StrictMode>,
)

import { useState } from 'react'
import Content from './components/content'
import Header from './components/header'
import avatar from './assets/avatar_catalogo.png'
import maverick from './assets/maverick.png'
import gatoDeBotas from './assets/gato_de_botas.png'
import ListMovie from './components/list-movie'

function App() { 
  const [movieCurrent, setMovieCurrent] = useState({
    title: 'Avatar',
    imdb: '9.2',
    img: avatar,
    director: 'James Cameron',
    sinopse: 'Texto sinopse aqui'
  })

  const movies = [
    {
        title: 'Avatar',
        imdb: '9.2',
        img: avatar,
        director: 'James Cameron',
        sinopse: 'Texto sinopse aqui'
    },
    {
        title: 'Maverick',
        imdb: '9.2',
        img: maverick,
        director: 'Tom Cruise',
        sinopse: 'Texto sinopse aqui'
    },
    {
        title: 'Gato de Botas',
        imdb: '8.9',
        img: gatoDeBotas,
        director: 'Antonio Banderas',
        sinopse: 'Texto sinopse aqui'
    },
  ]

  return (
    <div className="App">
        <Header />
        <Content title={movieCurrent.title} imdb={movieCurrent.imdb} director={movieCurrent.director} sinopse={movieCurrent.sinopse} img={movieCurrent.img}/>
        <ListMovie movies={movies} handleSetState={setMovieCurrent}/>
    </div>
  )
}

export default App

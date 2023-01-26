import './style.css'
import MainContent from './MainContent'
import mulanImg from './../assets/mulan.jpg'
import belaImg from './../assets/bela.jpg'
import brancaImg from './../assets/branca.jpg'
import sereiaImg from './../assets/sereia.jpg'
import aladdinImg from './../assets/aladdin.jpeg'
import princesaImg from './../assets/princesa.jpg'

const Catalog = () => {
    const movies = [
        {img: mulanImg,
        title: 'Mulan',
        director: 'Tony Bancroft',
        imdb: '7.6',
        comment: "To save her father from death in the army, a young single girl secretly goes in his place and becomes one of China's greatest heroes in the process."},
        {img: belaImg,
            title: 'Beauty and The Beast',
            director: 'Gary Trousdale',
            imdb: '8.0',
            comment: 'A selfish prince is doomed to become a monster for the rest of his life unless he manages to fall in love with the beautiful young woman he keeps captive.'},
        {img: brancaImg,
            title: 'Snow White and the Seven Dwarfs',
            director: 'William Cottrell',
            imdb: '7.6',
            comment: 'Left in a dangerous forest by her evil stepmother, a princess is rescued by seven dwarf miners who make her part of their household.'},
        {img: sereiaImg,
            title: 'The Little Mermaid',
            director: 'Ron Clements',
            imdb: '7.6',
            comment: 'A mermaid princess makes a deal with an unscrupulous witch to find a human prince on land.'},
        {img: aladdinImg,
            title: 'Aladdin',
            director: 'John Musker',
            imdb: '8.0',
            comment: 'A kindly street urchin and a Vizier compete over a magic lamp that has the power to grant their deepest desires.'},
        {img: princesaImg,
            title: 'The Princess and the Frog',
            director: 'Ron Clements',
            imdb: '7.1',
            comment: 'A waitress, desperate to fulfill her dreams as a restaurant owner, embarks on a journey to turn a frog prince into a human being, but has to face the same problem after kissing him.'},
    ]
  
    return(
        
    <div className="bodyCatalog">
        <MainContent img={movies[0].img} title={movies[0].title} imdb={movies[0].imdb} director={movies[0].director} comment={movies[0].comment}/>

        <div className="catalogTitle">
            <h1>Catalog</h1>
        </div>
        <div className="catalogImgs">
            <div className="lineImgs">
            <img src="src\assets\mulan.jpg" alt="img Mulan" />
            <img src="src\assets\bela.jpg" alt="img Bela" />
            <img src="src\assets\branca.jpg" alt="img Branca" />
            </div>
            <div className="lineImgs">
            <img src="src\assets\sereia.jpg" alt="img Sereia" />
            <img src="src\assets\aladdin.jpeg" alt="img Aladdin" />
            <img src="src\assets\princesa.jpg" alt="img Princesa" />
            </div>
        </div>
    </div>
    )
}

export default Catalog
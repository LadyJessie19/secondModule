import Header from './components/Header'
import MainContent from './components/MainContent'
import Catalog from './components/Catalog'

function App() {
  const commentMulan = 'comentário mulan Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vel incidunt dolor. Consequatur dolorem, ipsum iste doloremque doloribus odit repellat, est, distinctio dolor veritatis quo sit quam maxime. Repudiandae, fugiat?'
  
  return (
    <div className="App">
      <Header />
      <MainContent img="src/assets/mulan.jpg" title={'Mulan'} imdb={'7.5/10'} director={'Thomas Philco'} comment={commentMulan}/>
      <Catalog />
    </div>
  )
}

export default App

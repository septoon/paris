import { images } from './assets/data-img';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="booking">
        <h1>Забронировать стол:</h1>
        <a href="tel:+79780559317">+79780559317</a>
      </div>
      {
      images.map(item => {
        return (
          <img className="image" src={item.url} alt={item.alt} />
        )
      })
      }
    </div>
  )
}

export default App;

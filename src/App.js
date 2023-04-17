import { images } from './assets/data-img';
import './App.css';

function App() {
  return (
    <div className="App">
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

import './App.css';
import Activities from './Components/Activities.jsx'
import Restaurants from './Components/Restaurants.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let’s Leave Your Date to John von Neumann</h1>
      </header>
      <main>
        <div className='main-div'>
          <Activities />
          <Restaurants />
        </div>
      </main>
    </div>
  );
}

export default App;

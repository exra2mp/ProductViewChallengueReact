
import './App.css';
import ProductImage from './components/ProductImage';
import Description from './components/Description';
import Prices from './components/Prices';
import Button from './components/Button';
import Attribution from './components/Attribution';



function App() {
  return (
    <main className="App">
      <div className='main-container'>
        <ProductImage />
        <div className='description-container'>
          <Description />
          <Prices />
          <Button />
        </div>
      </div>
      <Attribution />
    </main>
  );
}

export default App;

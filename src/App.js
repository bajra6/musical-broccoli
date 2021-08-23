// import { Button } from 'react-bootstrap';
import Navbar from './components/navbar';
import CarouselAndFilter from './components/landingpage/carouselAndFilter';
import BestSellersAndNewArrivals from './components/landingpage/bestSellersAndNewArrivals';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselAndFilter />
      <BestSellersAndNewArrivals />
    </div>
  );
}

export default App;

import Navbar from './components/navbar';
import CarouselAndFilter from './components/landingpage/carouselAndFilter';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './components/search/SearchPage';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Navbar />
            <CarouselAndFilter />
          </div>
        </Route>

        <Route exact path="/search">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import './reset.css';
import PlanetsCards from './components/PlanetsCards/PlanetsCards';
import { Route, HashRouter } from 'react-router-dom';
import PlanetInfo from './components/PlanetInfo/PlanetInfo';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact>
        <PlanetsCards />
      </Route>
      <Route path="/planet">
        <PlanetInfo />
      </Route>
    </HashRouter>
  );
}

export default App;

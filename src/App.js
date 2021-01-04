import './App.css';
import PlantsView from './Layouts/PlantsView';
import PlantDetailsView from './Layouts/PlantDetailsView';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/plants">
            <Switch>
              <Route exact path="/plants">
                <PlantsView />
              </Route>
              <Route path="/plants/:plantId">
                <PlantDetailsView />
              </Route>
            </Switch>
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Headers/Headers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Restaurant from './components/Restaurant/Restaurant';
import NotFound from './components/NotFound/NotFound';
import MealDetails from './components/MealDetails/MealDetails';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Headers></Headers>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Restaurant></Restaurant>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/restaurant">
            <Restaurant></Restaurant>
          </Route>
          <Route path="/meal/:mealId">
            <MealDetails></MealDetails>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;

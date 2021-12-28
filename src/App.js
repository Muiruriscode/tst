import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/products"
import SearchCity from "./components/searchCity"
import SearchState from "./components/searchState"
import SearchProduct from "./components/searchProduct"
import Error from "./components/error"

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/product/:name">
          <SearchProduct />
        </Route>
        <Route path="/state/:name">
          <SearchState />
        </Route>
        <Route path="/city/:name">
          <SearchCity />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router> 

    </div>
  );
}

export default App;

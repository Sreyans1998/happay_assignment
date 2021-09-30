import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import { Route, Switch } from 'react-router';
import Home from "./Component/Home"
import Cart from "./Component/Cart"


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Cart" component={Cart} />
    </Switch>
  );
}

export default App;

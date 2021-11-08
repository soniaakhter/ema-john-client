import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';
function App() {
  return (
    <div>

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/"><Shop /></Route>
            <Route exact path="/shop"> <Shop /></Route>
            <Route exact path="/review"><OrderReview /> </Route>
            <PrivateRoute exact path="/inventory"><Inventory /></PrivateRoute>
            <PrivateRoute exact path="/shipping"><Shipping /></PrivateRoute>
            <PrivateRoute exact path="/placeorder"><PlaceOrder /></PrivateRoute>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/register"><Register /></Route>
            <Route path="*"><NotFound /></Route>
          </Switch>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;

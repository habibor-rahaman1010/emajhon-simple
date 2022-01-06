import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import OrderReview from './Components/OrderReview/OrderReview';
import ManageInventory from './Components/Manage Inventory/ManageInventory';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipping from './Components/Shipping/Shipping';


function App() {
  return (
    // <UseAuthProvider>
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Shop></Shop>
            </Route>

            <Route exact path='/'>
              <Shop></Shop>
            </Route>

            <Route exact path='/shop'>
              <Shop></Shop>
            </Route>

            <Route exact path='/inventory'>
              <ManageInventory></ManageInventory>
            </Route>

            <PrivateRoute exact path='/shipping'>
              <Shipping></Shipping>
            </PrivateRoute>

            <Route exact path='/review'>
              <OrderReview></OrderReview>
            </Route>

            <Route exact path='/about'>
              <About></About>
            </Route>

            <PrivateRoute exact path='/place_order'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <Route exact path='/registration'>
              <Registration></Registration>
            </Route>

            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

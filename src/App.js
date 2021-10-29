
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About';


import Home from './pages/Home/Home/Home';
import ContractUs from './pages/Login/ContractUs/ContractUs';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import OurTeam from './pages/OurTeam/OurTeam/OurTeam';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App" style={{ letterSpacing: ".005em" }}>

      <AuthProvider>
        <BrowserRouter>

          <Header></Header>

          <Switch>

            <Route exact path='/'>
              <Home></Home>

            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>

            </Route>
            <Route path='/ourteam'>
              <OurTeam></OurTeam>
            </Route>

            <PrivateRoute path='/contractus'>
              <ContractUs></ContractUs>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;

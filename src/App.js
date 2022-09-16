import './App.css';
import Login from './login/login';
import Register from './register/register';
import { Users } from './user/users';
import Todo from './todo/todo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './header/header';
import Movies from './Movies/Movies';
import Notfound from './notfound/notfound'
import Details from './details/details';
import Search from './search/search'
import favorites from './favorites/favorites';
import {LanguageProvider} from './context/context'
import {useState} from 'react'
import Footer from './Footer/footer';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom';
function App() {


  const [language, setLanguage] = useState('en')



  return (
    <>
        <Router>
          <LanguageProvider value={{language, setLanguage}}>
          <Header></Header>
          <HashRouter>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/" exact component={Movies}></Route>
            <Route path="/register" exact component={Register}></Route>
            <Route path="/todo" exact component={Todo}></Route>
            <Route path="/movies" exact component={Movies}></Route>
            <Route path="/details/:id" exact component={Details}></Route>
            <Route path="/search" exact component={Search}></Route>
            <Route path="/favorites" exact component={favorites}></Route>
            <Route path="*"  component={Notfound}></Route>
          </HashRouter>
          <Footer></Footer>
          </LanguageProvider>
        </Router>
    </>
  );
}

export default App;

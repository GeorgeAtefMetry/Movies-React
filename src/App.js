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
function App() {


  const [language, setLanguage] = useState('en')



  return (
    <>
        <Router>
          <LanguageProvider value={{language, setLanguage}}>
          
          <Footer></Footer>
          </LanguageProvider>
        </Router>
    </>
  );
}

export default App;

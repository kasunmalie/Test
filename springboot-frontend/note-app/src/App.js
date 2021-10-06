//import logo from './logo.svg';
import  './App.css';
import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListNoteComponent from './components/ListNoteComponent';
import { ThemeProvider } from '@material-ui/core';
import CreateNoteComponent from './components/CreateNoteComponent';

function App() {
  return (
    <div>
      <ThemeProvider >
      <Router>
      <div className="container">
     <HeaderComponent />
    <div className="container">
    <Switch>
      <Route path = "/" exact component={ListNoteComponent}></Route>
      <Route path = "/notes" component={ListNoteComponent}></Route>
      <Route path = "/add-note" component={CreateNoteComponent}></Route>
   </Switch>
    </div>
    <FooterComponent />
    </div>
    </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;

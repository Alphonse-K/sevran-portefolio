import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import Home from './components/home';
import About from './components/about';
import Prestations from './components/prestations';
import Contact from './components/contact';



function App() {
  return (
      <Router>
          <Route path='/' exact component={Home} />
          <Route path='/qui-suis-je' component={About} />
          <Route path='/prestations' component={Prestations} />
          <Route path='/contact' component={Contact} />
    </Router>
  );
}

export default App;

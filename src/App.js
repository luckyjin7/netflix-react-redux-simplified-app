import logo from './static/imgs/netflix-logo.png';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Display from "./components/Display"

function App() {
  return (
    <Router>
      <div className="movieDisplay">
        <img alt="website-logo" src={logo} className="movieDisplay__headLogo" />
          <Route path="/" exact component={Display}/>
      </div>
    </Router>        
  );
}

export default App;

import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { SwitchRouting, Header } from './ComponentMixing';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <SwitchRouting />
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Nav from '../../components/Nav/Nav';
import Me from '../../components/Me/Me';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';

function App() {

  return (
    <div className="App">
      <Nav className="navMain"/>
      <div className="main">
        <Me className="meMain"/>
      </div>
      <About className="aboutMain"/>
      <div className="main2">
        <Projects />
      </div>
    </div>
  );
}

export default App;

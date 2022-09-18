
import './App.css';
import Heading from './PortFolio/Heading';
import SecondBox from './PortFolio/SecondBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThirdCont from './PortFolio/ThirdCont';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Education from './PortFolio/Education';
import Connect from './PortFolio/Connect';
import Projects from './PortFolio/Projects'


function App() {
  return (
    <div className="App">
      <Heading/>
      <SecondBox/>
      <ThirdCont/>
      <Projects/>
      <Education/>
      <Connect/>
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from "./Header.js"
import Status from "./Status.js"
import Temp from "./Temp"
import Info from "./Info"
import Graph from "./Graph"
function App() {

  const [status, setStatus] = [{
    arduino: false, 
    server: true, 
    db: true}]

  const [temp, setTemp] = [{
    current: 23,
    avg: 21.9,
    target: 22,
    onoff: false, 
  }]
  
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Info />
        <Status arduino={status.arduino} server={status.server} db={status.db}/>
        <Temp 
          current={temp.current}
          avg={temp.avg}
          target={temp.target}
          onoff={temp.onoff}
        />

      </div>
      <Graph />
    </div>
  );
}

export default App;

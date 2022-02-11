import { Link } from "react-router-dom";
import logo from './resources/Santander-Logo.png';
import './styles.css';
function App() {
  return (

      <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        <h1>PROYECTO II - ACTIVIDAD INTEGRADORA</h1>
        <h2>
          GESTOR DE NOTIFICACIONES SANTANDER
        </h2>
        <br />
        <Link to="/SMS">
          <button type="button">
            SMS
          </button>
        </Link><br/><br/>
        <Link to="/EMAIL">
          <button type="button">
            EMAIL
          </button>
        </Link><br/><br/>
        <Link to="/PUSH">
          <button type="button">
            PUSH
          </button>
        </Link>
      </div>
  );
}

export default App;
import logo from '../resources/Santander-Logo.png';
import push from '../resources/push.png';
import '../styles.css';
import {Link} from "react-router-dom";

const PUSH = () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>PUSH</h1>
            <img src={push} className="App-logo-push" alt="logo" />
            <p>
                No hay notificaciones en enviadas.
            </p>
            <Link to={"/"}>
                <button type="button" >
                    HOME
                </button>
            </Link><br/><br/>
        </div>
    );
};

export default PUSH;
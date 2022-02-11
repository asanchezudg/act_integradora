import logo from '../resources/Santander-Logo.png';
import email from '../resources/email.png';
import '../styles.css';
import {Link} from "react-router-dom";

const EMAIL = () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>EMAIL</h1>
            <img src={email} className="App-logo-email" alt="logo"/>
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

export default EMAIL;
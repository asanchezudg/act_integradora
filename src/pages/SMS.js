import logo from '../resources/Santander-Logo.png';
import sms from '../resources/sms.png';
import '../styles.css';
import { Link} from "react-router-dom";

const SMS = () => {
    return (

        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>SMS</h1>
            <img src={sms   } className="App-logo-sms" alt="logo" />
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

export default SMS ;
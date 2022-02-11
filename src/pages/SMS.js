import logo from '../resources/Santander-Logo.png';
import '../styles.css';
import {Link} from "react-router-dom";

const SMS = () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>SMS</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, modi!
            </p>
            <Link to="./App">
                <button type="button">
                    SMS
                </button>
            </Link><br/><br/>
        </div>
    );
};

export default SMS;
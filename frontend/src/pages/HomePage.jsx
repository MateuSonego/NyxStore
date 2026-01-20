import { Link } from "react-router-dom";

import styles from "../styles/Home.module.css"

import logo from "../assets/NyxLogo.png"
import logo2 from "../assets/NyxLogo2.png"

function HomePage() {
    return (

        <div className={styles.container}>

            <div className={styles.navbar}>
                <div className="left">
                    <h1>Nyx Store</h1>
                </div>

                <div className="right">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Cadastro</Link>
                </div>
            </div>

            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <img src={logo2} alt="" />
            </div>

        </div>
    );
}

export default HomePage;
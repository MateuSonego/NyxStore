import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import whitelogo from "../assets/NyxWhiteLogo.png"

import styles from "../styles/Home.module.css"


function HomePage() {
    return (

        <div className={styles.mainContainer}>
            <div className={styles.stripe}>

            </div>
            <div className={styles.navbar}>


                <div className={styles.left}>
                    <img className={styles.navLogo} src={whitelogo} alt="" />
                </div>
                <div className={styles.middle}>

                </div>

                <div className={styles.right}>
                    <Link to="/search">
                        <FaSearch className={styles.navIcons} size={32} />
                    </Link>

                    <Link to="/cart">
                        <FaShoppingBag className={styles.navIcons} size={32} />
                    </Link>
                    <Link to="/login">
                        <FaUser className={styles.navIcons} size={32} />
                    </Link>

                </div>
            </div>


        </div>
    );
}

export default HomePage;
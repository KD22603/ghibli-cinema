import { Link} from "react-router-dom";
import styles from "./NavbarComponent.module.css";
import Search from "antd/es/input/Search";


const NavbarComponent = () =>{
    return(
      <nav className={styles.navbar}>
        <div className={styles.leftNav}>
      <Link className={styles.navLink} to={"/"}><img className={styles.navImg} src="src/company-images/logo.png"/> </Link>
      <Link className={styles.navLink} to={"browse"}>Browse</Link>
      <Link className={styles.navLink} to={""}>My Reservations</Link>
      <Link className={styles.navLink} to={""}>Favorites</Link>
    </div>
    <div className={styles.rightNav}>
    <Search
      placeholder="input search text"
      style={{
        width: 200,
      }}
    />
    </div>
    </nav>
    )
}

export default NavbarComponent;
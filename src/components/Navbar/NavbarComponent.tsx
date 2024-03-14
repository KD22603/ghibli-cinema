import { Link } from "react-router-dom";
import styles from "./NavbarComponent.module.css";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";


const NavbarComponent = () =>{
    return(
      <nav className={styles.navbar}>
        <div className={styles.leftNav}>
          <h5>Ghibli Cinema</h5>
      <Link className={styles.navLink} to={""}>Browse</Link>
      <Link className={styles.navLink} to={""}>My Reservations</Link>
      <Link className={styles.navLink} to={""}>Favorites</Link>
    </div>
    <div className={styles.rightNav}>
    <input className={styles.inputField} type="text" placeholder="Search Animes" />
    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    </div>
    </nav>
    )
}

export default NavbarComponent;
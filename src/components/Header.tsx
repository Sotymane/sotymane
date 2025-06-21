import styles from "./Header.module.css";
import logo from "/1x512.png";

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo" />
            {/* <h1>SOTYMANE</h1>
            <h2>MUSIC PRODUCER & AUTHOR</h2> */}
        </header>
    );
};

import styles from "./Footer.module.css";
import { AiOutlineSpotify, AiOutlineInstagram } from "react-icons/ai";
import { RiTelegram2Line } from "react-icons/ri";

export const Footer = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.icons}>
                <a
                    href="https://open.spotify.com/artist/2TqCICTqZqMm7jsfLzTKpg?si=XmzADU0iQberBpocdjwfaw"
                    target="_blank"
                    rel="noopener"
                >
                    <AiOutlineSpotify />
                </a>
                <a href="https://t.me/sotymane" target="_blank" rel="noopener">
                    <RiTelegram2Line />
                </a>
                <a
                    href="https://www.instagram.com/sotymane/"
                    target="_blank"
                    rel="noopener"
                >
                    <AiOutlineInstagram />
                </a>
            </div>
            <h6>
                contact:{" "}
                <a href="mailto:sotymane@gmail.com">sotymane@gmail.com</a>
            </h6>
        </div>
    );
};

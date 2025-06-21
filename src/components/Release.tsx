import styles from "./Release.module.css";

type ReleaseProps = {
    name: string;
    imageUrl: string;
    bandlinkUrl: string;
};

export const Release = ({ name, imageUrl, bandlinkUrl }: ReleaseProps) => {
    return (
        <li className={styles.release}>
            <a href={bandlinkUrl} target="_blank" rel="noopener">
                <img className={styles.releaseImg} src={imageUrl} alt={name} />
            </a>
            {/* <p>{name}</p> */}
        </li>
    );
};

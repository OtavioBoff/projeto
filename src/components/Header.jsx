import styles from "./Header.module.css";

import igniteLogo from "../assets/ignite-icon.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="ignite logo" />
    </header>
  );
}

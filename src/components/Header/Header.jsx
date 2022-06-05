import styles from "./Header.module.css";

import igniteLogo from '../../assets/icons/Ignite-simbol.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt='logotipo do Projeto' />
      <span>Ignite Feed</span>
    </header>
  );
}

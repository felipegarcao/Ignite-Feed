import styles from "./Header.module.css";

import igniteLogo from '../../assets/icons/Ignite-simbol.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt='LogoTipo do Projeto' />
      <span>Ignite Feed</span>
    </header>
  );
}

import rocket from '../../assets/rocket.svg';
import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={rocket}
        alt="Logo de um foguete"
        className={styles.logo}
      />
      <strong className={styles.brand}>
        to<span className={styles.emphasis}>do</span>
      </strong>
    </header>
  );
}

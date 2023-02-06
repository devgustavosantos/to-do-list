import clipboardImg from '../../assets/clipboard.svg';
import styles from './styles.module.css';

export function Empty() {
  return (
    <div className={styles.empty}>
      <img
        src={clipboardImg}
        alt="Imagem de um prancheta de tarefas"
        className={styles.clipboard}
      />
      <p className={styles.emphasized}>
        Você ainda não tem tarefas cadastradas
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}

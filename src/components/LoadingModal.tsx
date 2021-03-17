import styles from "../styles/components/loadingModal.module.css";

export default function LoadingModal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div />
      </div>
    </div>
  );
}

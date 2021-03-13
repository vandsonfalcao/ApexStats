import styles from "../styles/components/accountStats.module.css";

export function AccountStats(props) {
  return (
    <div className={styles.accountStats}>
      <div>ACCOUNT STATS</div>
      <div className={styles.accountContainer}>
        <div className={styles.header}>
          <div>
            <span>{`Total ${props.data.total?.kills.name}`}</span>
            <br />
            <a>{props.data.total?.kills.value}</a>
          </div>
          <div>
            <span>{`Total ${props.data.total?.damage.name}`}</span>
            <br />
            <a>{props.data.total?.damage.value}</a>
          </div>
          <div>
            <span>{`Total ${props.data.total?.headshots.name}`}</span>
            <br />
            <a>{props.data.total?.headshots.value}</a>
          </div>
        </div>
        <div className={styles.main}>
          <header>Level</header>
          <strong>{props.data.global?.level}</strong>
          <br />
          <a>Platform: {props.data.global?.platform}</a>
          {props.data.realtime?.isOnline ? (
            <a className={styles.online}>Online</a>
          ) : (
            <a className={styles.offline}>Offline</a>
          )}
        </div>
      </div>
    </div>
  );
}

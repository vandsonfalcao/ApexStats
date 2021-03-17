import styles from "../styles/components/accountStats.module.css";

interface player {
  global: {
    name: string;
    uid: number;
    avatar: null;
    platform: string;
    level: number;
    toNextLevelPercent: number;
    internalUpdateCount: number;
    rank: {
      rankScore: number;
      rankName: string;
      rankImg: string;
    };
  };
  realtime: {
    isOnline: number;
    isInGame: number;
    selectedLegend: string;
  };
  legends: {
    selected: {
      LegendName: string;
      data: [
        {
          name: string;
          value: number;
          key: string;
        },
        {
          name: string;
          value: number;
          key: string;
        },
        {
          name: string;
          value: number;
          key: string;
        }
      ];
      ImgAssets: {
        icon: string;
        banner: string;
      };
    };
  };
  total: {
    specialEvent_kills: {
      name: string;
      value: number;
    };
    specialEvent_wins: {
      name: string;
      value: number;
    };
    specialEvent_damage: {
      name: string;
      value: number;
    };
  };
}

interface AccountStatsProps {
  data: player;
}

export function AccountStats(props: AccountStatsProps) {
  return (
    <div className={styles.accountStats}>
      <div>ACCOUNT STATS</div>
      <div className={styles.accountContainer}>
        <div className={styles.header}>
          <div>
            <span>{`Total Kills`}</span>
            <br />
            <a>{props.data.total?.specialEvent_kills.value}</a>
          </div>
          <div>
            <span>{`Total Damage`}</span>
            <br />
            <a>{props.data.total?.specialEvent_damage.value}</a>
          </div>
          <div>
            <span>{`Total Wins`}</span>
            <br />
            <a>{props.data.total?.specialEvent_wins.value}</a>
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

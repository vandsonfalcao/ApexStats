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
    specialEvent_kills?: {
      name: string;
      value: number;
    };
    kills?: {
      name: string;
      value: number;
    };
    specialEvent_wins?: {
      name: string;
      value: number;
    };
    wins?: {
      name: string;
      value: number;
    };
    specialEvent_damage?: {
      name: string;
      value: number;
    };
    damage?: {
      name: string;
      value: number;
    };
  };
}

interface AccountStatsProps {
  data: player;
}

export function AccountStats(props: AccountStatsProps) {
  function checkKills() {
    try {
      props.data.total?.kills.name.length;
      try {
        props.data.total?.specialEvent_kills.name.length;
        if (
          props.data.total?.kills.value >
          props.data.total?.specialEvent_kills.value
        ) {
          return props.data.total?.kills.value;
        } else {
          return props.data.total?.specialEvent_kills.value;
        }
      } catch (error) {
        return props.data.total?.kills.value;
      }
    } catch (error) {
      try {
        props.data.total?.specialEvent_kills.name.length;
        return props.data.total?.specialEvent_kills.value;
      } catch (error) {
        return "No-data";
      }
    }
  }
  function checkDamage() {
    try {
      props.data.total?.damage.name.length;
      try {
        props.data.total?.specialEvent_damage.name.length;
        if (
          props.data.total?.damage.value >
          props.data.total?.specialEvent_damage.value
        ) {
          return props.data.total?.damage.value;
        } else {
          return props.data.total?.specialEvent_damage.value;
        }
      } catch (error) {
        return props.data.total?.damage.value;
      }
    } catch (error) {
      try {
        props.data.total?.specialEvent_damage.name.length;
        return props.data.total?.specialEvent_damage.value;
      } catch (error) {
        return "No-data";
      }
    }
  }
  function checkWins() {
    try {
      props.data.total?.wins.name.length;
      try {
        props.data.total?.specialEvent_wins.name.length;
        if (
          props.data.total?.wins.value >
          props.data.total?.specialEvent_wins.value
        ) {
          return props.data.total?.wins.value;
        } else {
          return props.data.total?.specialEvent_wins.value;
        }
      } catch (error) {
        return props.data.total?.wins.value;
      }
    } catch (error) {
      try {
        props.data.total?.specialEvent_wins.name.length;
        return props.data.total?.specialEvent_wins.value;
      } catch (error) {
        return "No-data";
      }
    }
  }
  return (
    <div className={styles.accountStats}>
      <div>ACCOUNT STATS</div>
      <div className={styles.accountContainer}>
        <div className={styles.header}>
          <div>
            <span>{`Total Kills`}</span>
            <br />
            <a>{checkKills()}</a>
          </div>
          <div>
            <span>{`Total Damage`}</span>
            <br />
            <a>{checkDamage()}</a>
          </div>
          <div>
            <span>{`Total Wins`}</span>
            <br />
            <a>{checkWins()}</a>
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

import { useEffect, useState } from "react";
import styles from "../styles/pages/index.module.css";

//Definindo type
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
    kills: {
      name: string;
      value: number;
    };
    headshots: {
      name: string;
      value: number;
    };
    damage: {
      name: string;
      value: number;
    };
  };
}

export default function Index() {
  const [playerData, setPlayerData] = useState({} as player);

  useEffect(() => {
    fetch(
      "https://api.mozambiquehe.re/bridge?version=5&platform=PS4&player=TNBr_FakeNinJa&auth=jqxDHdVAYnI4luU8LvkE"
    )
      .then((res) => res.json())
      .then((data) => setPlayerData(data));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.legendStats}>
        <div>LEGEND SELECTED</div>
        <div className={styles.legendContainer}>
          <div id={styles.userInfo}>
            <p>{` {${playerData.global?.name}} `}</p>
            <img
              src={playerData.global?.rank.rankImg}
              alt={playerData.global?.rank.rankName}
            />
            <span>{playerData.global?.rank.rankName}</span>
          </div>
          <div id={styles.userStats}>
            <div>
              <div>
                <span>
                  {playerData.legends?.selected.data[0]
                    ? playerData.legends?.selected.data[0].name
                    : "no-data"}
                </span>
                <br />
                <a>
                  {playerData.legends?.selected.data[0]
                    ? playerData.legends?.selected.data[0].value
                    : ""}
                </a>
              </div>
            </div>
            <div>
              <div>
                <span>
                  {playerData.legends?.selected.data[1]
                    ? playerData.legends?.selected.data[1].name
                    : "no-data"}
                </span>
                <br />
                <a>
                  {playerData.legends?.selected.data[1]
                    ? playerData.legends?.selected.data[1].value
                    : ""}
                </a>
              </div>
            </div>
            <div>
              <div>
                <span>
                  {playerData.legends?.selected.data[2]
                    ? playerData.legends?.selected.data[2].name
                    : "no-data"}
                </span>
                <br />
                <a>
                  {playerData.legends?.selected.data[2]
                    ? playerData.legends?.selected.data[2].value
                    : ""}
                </a>
              </div>
            </div>
          </div>
          <div id={styles.userImg}>
            <img src={playerData.legends?.selected.ImgAssets.icon} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.accountStats}>
        <div>ACCOUNT STATS</div>
        <div className={styles.accountContainer}>
          <div className={styles.header}>
            <div>
              <span>{`Total ${playerData.total?.kills.name}`}</span>
              <br />
              <a>{playerData.total?.kills.value}</a>
            </div>
            <div>
              <span>{`Total ${playerData.total?.damage.name}`}</span>
              <br />
              <a>{playerData.total?.damage.value}</a>
            </div>
            <div>
              <span>{`Total ${playerData.total?.headshots.name}`}</span>
              <br />
              <a>{playerData.total?.headshots.value}</a>
            </div>
          </div>
          <div className={styles.main}>
            <header>Level</header>
            <strong>{playerData.global?.level}</strong>
            <br />
            <a>Plataforma: {playerData.global?.platform}</a>
            {playerData.realtime?.isOnline ? (
              <p className={styles.offline}>Offline</p>
            ) : (
              <p className={styles.online}>Online</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

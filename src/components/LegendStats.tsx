import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import styles from "../styles/components/legendStats.module.css";

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

interface LegendStatsProps {
  data: player;
}

export function LegendStats(props: LegendStatsProps) {
  const { showLoad } = useContext(HomeContext);

  return (
    <div className={styles.legendStats}>
      <div>LEGEND SELECTED</div>
      <div className={styles.legendContainer}>
        <div id={styles.userInfo}>
          <p>{props.data.global?.name}</p>
          <img
            src={props.data.global?.rank.rankImg}
            alt={props.data.global?.rank.rankName}
          />
          <span>{props.data.global?.rank.rankName}</span>
        </div>
        <div id={styles.userStats}>
          <div>
            <div>
              <span>
                {props.data.legends?.selected.data[0]
                  ? props.data.legends?.selected.data[0].name
                  : "no-data"}
              </span>
              <br />
              <a>
                {props.data.legends?.selected.data[0]
                  ? props.data.legends?.selected.data[0].value
                  : "-"}
              </a>
            </div>
          </div>
          <div>
            <div>
              <span>
                {props.data.legends?.selected.data[1]
                  ? props.data.legends?.selected.data[1].name
                  : "no-data"}
              </span>
              <br />
              <a>
                {props.data.legends?.selected.data[1]
                  ? props.data.legends?.selected.data[1].value
                  : "-"}
              </a>
            </div>
          </div>
          <div>
            <div>
              <span>
                {props.data.legends?.selected.data[2]
                  ? props.data.legends?.selected.data[2].name
                  : "no-data"}
              </span>
              <br />
              <a>
                {props.data.legends?.selected.data[2]
                  ? props.data.legends?.selected.data[2].value
                  : "-"}
              </a>
            </div>
          </div>
        </div>
        <div id={styles.userImg}>
          {!showLoad && (
            <img src={props.data.legends?.selected.ImgAssets.icon} alt="" />
          )}
        </div>
      </div>
    </div>
  );
}

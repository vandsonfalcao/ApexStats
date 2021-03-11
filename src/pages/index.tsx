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
      <p>NickName: {playerData.global?.name}</p>
      <p>Plataforma: {playerData.global?.platform}</p>
      <p>Level: {playerData.global?.level}</p>
      <img
        src={playerData.global?.rank.rankImg}
        alt={playerData.global?.rank.rankName}
      />
      <p>Rank: {playerData.global?.rank.rankName}</p>
      <p>LendaSelecionada: {playerData.realtime?.selectedLegend}</p>
      <img
        src={playerData.legends?.selected.ImgAssets.icon}
        alt={playerData.global?.rank.rankName}
      />
    </div>
  );
}

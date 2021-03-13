import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AccountStats } from "../components/AccountStats";
import { LegendStats } from "../components/LegendStats";
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
  const route = useRouter(); // o route.query so fica pronto depois da pagina carregar esse é o problema
  const [platform, setPlatform] = useState("PS4");
  const [playerId, setPlayerId] = useState("TNBr_FakeNinJa");

  useEffect(() => {
    fetch(
      `https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${playerId}&auth=jqxDHdVAYnI4luU8LvkE`
    )
      .then((res) => res.json())
      .then((data) => setPlayerData(data));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <LegendStats data={playerData} />
        <AccountStats data={playerData} />
      </div>
    </>
  );
}

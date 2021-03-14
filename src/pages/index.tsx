import React, { useEffect, useState } from "react";
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
    specialEvent_kills: {
      name: string;
      value: number;
    };
    specialEvent_wins: {
      name: string;
      value: number;
    };
    specialEvent_damages: {
      name: string;
      value: number;
    };
  };
}

export default function Index() {
  const [playerData, setPlayerData] = useState({} as player);

  function getDataFromApi(platform: string, id: string) {
    fetch(
      `https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${id}&auth=jqxDHdVAYnI4luU8LvkE`
    )
      .then((res) => res.json())
      .then((data) => setPlayerData(data));
  }

  useEffect(() => {
    const platform = new URL(window.location.href).searchParams.get("platform");
    const playerName = new URL(window.location.href).searchParams.get(
      "playerName"
    );

    if (platform != null && playerName != null) {
      fetch(
        `https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${playerName}&auth=jqxDHdVAYnI4luU8LvkE`
      ).then((res) => {
        if (res.status != 200) {
          getDataFromApi("PS4", "TNBr_FakeNinJa");
        } else {
          getDataFromApi(platform, playerName);
        }
      });
    } else {
      getDataFromApi("PS4", "TNBr_FakeNinJa");
    }
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

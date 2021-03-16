import { useContext, useEffect } from "react";
import { HomeContext } from "../context/HomeContext";
import { AccountStats } from "./AccountStats";
import { LegendStats } from "./LegendStats";
import { SearchPlayer } from "./SearchPlayer";

import styles from "../styles/components/home.module.css";

export function Home() {
  const { getDataFromApi, playerData } = useContext(HomeContext);

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
      <div className={styles.footer}>
        <SearchPlayer />
      </div>
    </>
  );
}

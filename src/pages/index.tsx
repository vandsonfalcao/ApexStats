import { useEffect, useState } from "react";
import https from "https";
import styles from "../styles/pages/index.module.css";

export default function Index() {
  const [playerData, setPlayerData] = useState("");

  useEffect(() => {
    https.get(
      "https://api.mozambiquehe.re/bridge?version=5&platform=PS4&player=TNBr_FakeNinJa&auth=jqxDHdVAYnI4luU8LvkE",
      (resp) => {
        let data = "";

        resp.on("data", (content) => {
          setPlayerData((data += content));
        });
      }
    );
  }, []);
  return (
    <div className={styles.container}>
      <p>{playerData}</p>
    </div>
  );
}

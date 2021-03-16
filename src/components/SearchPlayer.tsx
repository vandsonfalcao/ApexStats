import React, { useContext, useEffect, useState } from "react";
import { HomeContext } from "../context/HomeContext";
import styles from "../styles/components/searchPlayer.module.css";

interface Newplayer {
  nickname: string;
  platform: string;
}

export function SearchPlayer() {
  const { getDataFromApi } = useContext(HomeContext);
  const [isValid, setIsValid] = useState(false);
  const [newPlayer, setNewPlayer] = useState({
    nickname: "",
    platform: "",
  } as Newplayer);

  function searchPlayer() {
    getDataFromApi(newPlayer.platform, newPlayer.nickname);
  }

  useEffect(() => {
    if (newPlayer.nickname !== "" && newPlayer.platform !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [newPlayer]);

  return (
    <div className={styles.container}>
      <div>
        <input
          type="text"
          name="nickname"
          maxLength={24}
          placeholder="Your NickName?"
          spellCheck={false}
          autoFocus
          onChange={(e) => {
            setNewPlayer((player) => ({ ...player, nickname: e.target.value }));
          }}
        />
      </div>
      <div>
        <select
          name="platform"
          onChange={(e) => {
            setNewPlayer((player) => ({ ...player, platform: e.target.value }));
          }}
        >
          <option value="">Your Platform?</option>
          <option value="X1">XBOX</option>
          <option value="PC">PC</option>
          <option value="PS4">PSN</option>
        </select>
      </div>
      <div>
        {isValid ? (
          <button className={styles.btActive} onClick={searchPlayer}>
            SearchPlayerStats
          </button>
        ) : (
          <button className={styles.btInative}>SearchPlayerStats</button>
        )}
      </div>
    </div>
  );
}

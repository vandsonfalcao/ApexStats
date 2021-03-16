import React, { useEffect, useState } from "react";
import styles from "../styles/components/SearchPlayer.module.css";

interface Newplayer {
  nickname: string;
  platform: string;
}

export function SearchPlayer() {
  const [isValid, setIsValid] = useState(false);
  const [newPlayer, setNewPlayer] = useState({} as Newplayer);

  function searchPlayer() {
    console.log(newPlayer, isValid);
  }

  useEffect(() => {
    if (
      newPlayer.nickname !== (undefined || "") &&
      newPlayer.platform !== (undefined || "")
    ) {
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

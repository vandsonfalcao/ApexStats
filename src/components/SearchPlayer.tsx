import React, { useEffect, useState } from "react";
import Select from "react-select";
import styles from "../styles/components/SearchPlayer.module.css";

interface Newplayer {
  nickname: string;
  platform: string;
}

export function SearchPlayer() {
  const [isValid, setIsValid] = useState(false);
  const [newPlayer, setNewPlayer] = useState({} as Newplayer);
  const options = [
    { value: "X1", label: "XBOX" },
    { value: "PS4", label: "PSN" },
    { value: "PC", label: "PC" },
  ];

  function searchPlayer() {}

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
          autoFocus
          onChange={(e) => {
            setNewPlayer((player) => ({ ...player, nickname: e.target.value }));
          }}
        />
      </div>
      <div>
        <Select
          className="basic-single"
          classNamePrefix="your Platform?"
          options={options}
          onInputchange={(value: string) =>
            setNewPlayer((player) => ({ ...player, platform: value }))
          }
        />
      </div>
      <div>
        {isValid ? (
          <button className={styles.btInative}>SearchPlayerStats</button>
        ) : (
          <button className={styles.btActive} onClick={searchPlayer}>
            SearchPlayerStats
          </button>
        )}
      </div>
    </div>
  );
}

import { createContext, ReactNode, useState } from "react";

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

interface HomeContextData {
  getDataFromApi: (platform: string, id: string) => void;
  playerData: player;
}
interface HomeContextProviderProps {
  children: ReactNode;
}

export const HomeContext = createContext({} as HomeContextData);

export function HomeContextProvider({ children }: HomeContextProviderProps) {
  const [playerData, setPlayerData] = useState({} as player);

  function getDataFromApi(platform: string, id: string) {
    fetch(
      `https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${id}&auth=jqxDHdVAYnI4luU8LvkE`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlayerData(data);
      });
  }

  return (
    <HomeContext.Provider
      value={{
        getDataFromApi,
        playerData,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

import styles from "../styles/components/legendStats.module.css";

export function LegendStats(props) {
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
          <img src={props.data.legends?.selected.ImgAssets.icon} alt="" />
        </div>
      </div>
    </div>
  );
}

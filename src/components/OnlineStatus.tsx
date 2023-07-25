import styles from "@/app/layout.module.css";
import useOnlineStatus from "@/hooks/useOnlineStatus";

const OnlineStatus = () => {
  const isOnline = useOnlineStatus();
  return (
    <div className={styles.onlineStatus}>
      <p>{isOnline ? "Online" : "Offline"}</p>
      <span style={{ backgroundColor: isOnline ? "green" : "red" }}></span>
    </div>
  );
};

export default OnlineStatus;

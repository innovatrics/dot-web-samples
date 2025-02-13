import { SmileLivenessCallback } from "@innovatrics/dot-smile-liveness";
import styles from "../styles/index.module.css";
import buttonStyles from "../styles/button.module.css";
import SmileLivenessCamera from "./SmileLivenessCamera";
import SmileLivenessUi from "./SmileLivenessUi";

interface Props {
  onComplete: SmileLivenessCallback;
  onError: (error: Error) => void;
  onBackClick: () => void;
}

function SmileLiveness({ onBackClick, onComplete, onError }: Props) {
  return (
    <>
      <h2>Smile Liveness</h2>
      <div>
        <button className={buttonStyles.primary} onClick={onBackClick}>
          Go back
        </button>
      </div>
      <div className={styles.container}>
        <SmileLivenessCamera onComplete={onComplete} onError={onError} />
        <SmileLivenessUi showCameraButtons />
      </div>
    </>
  );
}

export default SmileLiveness;

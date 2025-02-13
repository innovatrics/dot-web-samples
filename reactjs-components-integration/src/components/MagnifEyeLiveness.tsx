import type { MagnifEyeLivenessCallback } from "@innovatrics/dot-magnifeye-liveness";
import styles from "../styles/index.module.css";
import buttonStyles from "../styles/button.module.css";
import MagnifEyeLivenessCamera from "./MagnifEyeLivenessCamera";
import MagnifEyeLivenessUi from "./MagnifEyeLivenessUi";

interface Props {
  onComplete: MagnifEyeLivenessCallback;
  onError: (error: Error) => void;
  onBackClick: () => void;
}

function MagnifEyeLiveness({ onBackClick, onComplete, onError }: Props) {
  return (
    <>
      <h2>MagnifEye Liveness</h2>
      <div>
        <button className={buttonStyles.primary} onClick={onBackClick}>
          Go back
        </button>
      </div>
      <div className={styles.container}>
        <MagnifEyeLivenessCamera onComplete={onComplete} onError={onError} />
        <MagnifEyeLivenessUi showCameraButtons />
      </div>
    </>
  );
}

export default MagnifEyeLiveness;

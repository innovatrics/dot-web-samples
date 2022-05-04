import { Step } from "../types";
import styles from "../styles/index.module.css";
import buttonStyles from "../styles/button.module.css";

interface Props {
  setStep: (step: Step) => void;
  photoUrl?: string;
}

const PhotoResult = ({ photoUrl, setStep }: Props) => {
  const handleBackClick = () => {
    setStep(Step.SELECT_COMPONENT);
  };
  return (
    <>
      <button className={buttonStyles.primary} onClick={handleBackClick}>
        Back
      </button>
      <div className={styles.container}>
        <img alt="Web component result" src={photoUrl} />
      </div>
    </>
  );
};

export default PhotoResult;

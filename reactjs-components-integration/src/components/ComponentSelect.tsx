import { Step } from "../types";
import styles from "../styles/button.module.css";

interface Props {
  setStep: (step: Step) => void;
}

const ComponentSelect = ({ setStep }: Props) => {
  const handleDocumentClick = () => {
    setStep(Step.DOCUMENT_CAPTURE);
  };

  const handleFaceClick = () => {
    setStep(Step.FACE_CAPTURE);
  };

  return (
    <div>
      <button className={styles.primary} onClick={handleDocumentClick}>
        Document
      </button>
      <button className={styles.primary} onClick={handleFaceClick}>
        Face
      </button>
    </div>
  );
};

export default ComponentSelect;

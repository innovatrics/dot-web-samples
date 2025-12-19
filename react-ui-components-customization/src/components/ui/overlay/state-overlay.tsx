import clsx from "clsx";
import overlayStyles from "../../../styles/overlay.module.css";

type Props = {
  isCameraReady?: boolean;
  text: string;
};

export function StateOverlay({ isCameraReady, text }: Props) {
  const overlayClasses = clsx(overlayStyles.overlay, {
    [overlayStyles.notReady]: !isCameraReady,
  });

  return (
    <div className={overlayClasses}>
      <div className={overlayStyles.content}>
        <p className={overlayStyles.text}>{text}</p>
      </div>
    </div>
  );
}

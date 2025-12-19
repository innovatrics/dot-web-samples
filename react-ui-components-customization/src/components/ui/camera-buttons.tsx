import type { CommonCustomEvent } from "@innovatrics/dot-face-auto-capture/events";

import { ControlEventInstruction } from "@innovatrics/dot-face-auto-capture/events";
import buttonStyles from "../../styles/camera-buttons.module.css";
import { SwitchCameraIcon } from "../../assets/switch-camera";
import { MirrorIcon } from "../../assets/mirror";

type Props = {
  customControlEvent: CommonCustomEvent<string>["CONTROL"];
  isSwitchCameraDisabled: boolean;
};

export function CameraButtons({
  customControlEvent,
  isSwitchCameraDisabled,
}: Props) {
  function handleMirrorOverride() {
    const customEventDetail = {
      instruction: ControlEventInstruction.TOGGLE_MIRROR,
    };
    document.dispatchEvent(
      new CustomEvent(customControlEvent, { detail: customEventDetail })
    );
  }

  function handleSwitchCamera() {
    const customEventDetail = {
      instruction: ControlEventInstruction.SWITCH_CAMERA,
    };
    document.dispatchEvent(
      new CustomEvent(customControlEvent, { detail: customEventDetail })
    );
  }

  return (
    <div className={buttonStyles.cameraButtonGroup}>
      <button disabled={isSwitchCameraDisabled} onClick={handleSwitchCamera}>
        {SwitchCameraIcon}
      </button>

      <button onClick={handleMirrorOverride}>{MirrorIcon}</button>
    </div>
  );
}

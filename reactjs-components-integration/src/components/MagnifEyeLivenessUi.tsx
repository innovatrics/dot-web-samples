import "@innovatrics/dot-auto-capture-ui/magnifeye-liveness";
import { useEffect } from "react";
import type {
  MagnifEyeLivenessUiProps,
  HTMLMagnifEyeLivenessUiElement,
} from "@innovatrics/dot-auto-capture-ui/magnifeye-liveness";

function MagnifEyeLivenessUi(props: MagnifEyeLivenessUiProps) {
  useEffect(() => {
    const uiElement = document.getElementById(
      "x-dot-magnifeye-liveness-ui",
    ) as HTMLMagnifEyeLivenessUiElement | null;

    if (uiElement) {
      uiElement.props = props;
    }
  });

  return <x-dot-magnifeye-liveness-ui id="x-dot-magnifeye-liveness-ui" />;
}

export default MagnifEyeLivenessUi;

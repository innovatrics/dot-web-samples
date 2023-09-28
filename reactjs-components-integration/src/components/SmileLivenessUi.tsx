import "@innovatrics/dot-auto-capture-ui/smile-liveness";

import type {
  SmileLivenessUiProps,
  HTMLSmileLivenessUiElement,
} from "@innovatrics/dot-auto-capture-ui/smile-liveness";
import { useEffect } from "react";

function SmileLivenessUi(props: SmileLivenessUiProps) {
  useEffect(() => {
    const uiElement = document.getElementById(
      "x-dot-smile-liveness-ui",
    ) as HTMLSmileLivenessUiElement | null;

    if (uiElement) {
      uiElement.props = props;
    }
  });

  return <x-dot-smile-liveness-ui id="x-dot-smile-liveness-ui" />;
}

export default SmileLivenessUi;

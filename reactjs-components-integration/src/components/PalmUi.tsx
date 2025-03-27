import "@innovatrics/dot-auto-capture-ui/palm";
import { useEffect } from "react";
import type {
  PalmUiProps,
  HTMLPalmUiElement,
} from "@innovatrics/dot-auto-capture-ui/palm";

function PalmUi(props: PalmUiProps) {
  useEffect(() => {
    const uiElement = document.getElementById(
      "x-dot-palm-capture-ui",
    ) as HTMLPalmUiElement | null;

    if (uiElement) {
      uiElement.props = props;
    }
  });

  return <x-dot-palm-capture-ui id="x-dot-palm-capture-ui" />;
}

export default PalmUi;

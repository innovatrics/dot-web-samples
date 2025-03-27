import "@innovatrics/dot-palm-capture";
import type {
  PalmCameraProps,
  HTMLPalmCaptureElement,
} from "@innovatrics/dot-palm-capture";
import { useEffect } from "react";

/*
 * When component is initiliazed, sam.wasm file will be fetched from http://localhost:3000/sam.wasm.
 * That's why sam.wasm file need to be placed in root of public folder.
 */

function PalmCamera(props: PalmCameraProps) {
  useEffect(() => {
    // 2. Init existed custom web-component
    const documentAutoCaptureHTMLElement = document.getElementById(
      "x-dot-palm-capture",
    ) as HTMLPalmCaptureElement | null;

    if (documentAutoCaptureHTMLElement) {
      documentAutoCaptureHTMLElement.cameraOptions = props;
    }
  });
  // 1. Return empty custom web-component html TAG
  return <x-dot-palm-capture id="x-dot-palm-capture" />;
}

export default PalmCamera;

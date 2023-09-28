import "@innovatrics/dot-face-auto-capture";
import type {
  FaceCameraProps,
  HTMLFaceCaptureElement,
} from "@innovatrics/dot-face-auto-capture";
import { useEffect } from "react";
/*
 * When component is initiliazed, sam.wasm file will be fetched from http://localhost:3000/sam.wasm.
 * That's why sam.wasm file need to be placed in root of public folder.
 */

function FaceCamera(props: FaceCameraProps) {
  useEffect(() => {
    // 2. Init existed custom web-component
    const faceAutoCaptureHTMLElement = document.getElementById(
      "x-dot-face-auto-capture",
    ) as HTMLFaceCaptureElement | null;

    if (faceAutoCaptureHTMLElement) {
      faceAutoCaptureHTMLElement.cameraOptions = props;
    }
  });

  // 1. Return empty custom web-component html TAG
  return <x-dot-face-auto-capture id="x-dot-face-auto-capture" />;
}

export default FaceCamera;

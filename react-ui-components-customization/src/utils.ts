import type { Crop, Resolution } from "@innovatrics/dot-face-auto-capture";
import type { StarburstPathParams } from "./types";

export function getFacePlaceholderRectangleRelativeToCameraResolution(
  camera: Resolution
): Crop {
  return getSquarePlaceholderRectangleRelativeToCameraResolution(camera, 0.75);
}

function getSquarePlaceholderRectangleRelativeToCameraResolution(
  camera: Resolution,
  ratio: number
): Crop {
  const { height, shiftX, shiftY, width } = getSquarePlaceholderRectangle(
    camera,
    ratio
  );

  return {
    shiftX: shiftX / camera.width,
    shiftY: shiftY / camera.height,
    width: width / camera.width,
    height: height / camera.height,
  };
}

function getSquarePlaceholderRectangle(
  { height, width }: Resolution,
  ratio: number
): Crop {
  const placeholderSize = Math.min(width, height) * ratio;

  const shiftX = (width - placeholderSize) / 2;
  const shiftY = (height - placeholderSize) / 2;

  return {
    shiftX: shiftX,
    shiftY: shiftY,
    width: placeholderSize,
    height: placeholderSize,
  };
}

/* Font size is calculated from size of root node. 
We use the size of shorter side (width or height) and then compute value for font size using formula specified in adjustedFontSize */
export const calculateFontSize = (
  cameraResolution?: DOMRect,
  fontMinSize = 14
) => {
  if (!cameraResolution) {
    return fontMinSize;
  }

  if (cameraResolution.width < cameraResolution.height) {
    return adjustedFontSize(cameraResolution.width, fontMinSize);
  }

  return adjustedFontSize(cameraResolution.height, fontMinSize);
};

function adjustedFontSize(shorterSide: number, fontMinSize: number) {
  return Math.max(fontMinSize, fontMinSize + (shorterSide - 400) * 0.003 + 2);
}

export function generatePlaceholderStarburstPath({
  centerX,
  centerY,
  innerRadius,
  outerRadius,
  points,
}: StarburstPathParams): string {
  const angleStep = (Math.PI * 2) / points;
  let path = "";

  for (let i = 0; i < points; i++) {
    const angle = i * angleStep - Math.PI / 2;
    const nextAngle = (i + 0.5) * angleStep - Math.PI / 2;

    // Outer point
    const x1 = centerX + Math.cos(angle) * outerRadius;
    const y1 = centerY + Math.sin(angle) * outerRadius;

    // Inner point
    const x2 = centerX + Math.cos(nextAngle) * innerRadius;
    const y2 = centerY + Math.sin(nextAngle) * innerRadius;

    if (i === 0) {
      path += `M ${x1} ${y1} `;
    } else {
      path += `L ${x1} ${y1} `;
    }
    path += `L ${x2} ${y2} `;
  }

  path += "Z";
  return path;
}

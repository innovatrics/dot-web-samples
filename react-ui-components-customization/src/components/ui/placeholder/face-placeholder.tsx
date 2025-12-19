import type { WrapperProps } from "../../../types";
import { PlaceholderWrapper } from "./placeholder-wrapper";
import placeholderStyles from "../../../styles/placeholder.module.css";
import { generatePlaceholderStarburstPath } from "../../../utils";

export function FacePlaceholder({
  placeholderRectangle,
  ...rest
}: WrapperProps) {
  return (
    <>
      <PlaceholderWrapper placeholderRectangle={placeholderRectangle} {...rest}>
        <svg
          className={placeholderStyles.svg}
          fill="none"
          height="480"
          viewBox="0 0 480 480"
          width="480"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={generatePlaceholderStarburstPath({
              centerX: 240,
              centerY: 240,
              innerRadius: 238,
              outerRadius: 243,
              points: 30,
            })}
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="7"
          />
        </svg>
      </PlaceholderWrapper>
    </>
  );
}

import clsx from "clsx";
import placeholderStyles from "../../../styles/placeholder.module.css";
import type { WrapperProps } from "../../../types";

type Props = WrapperProps & {
  children: React.ReactNode;
};

export function PlaceholderWrapper({
  children,
  isInCandidateSelection,
  placeholderRectangle,
}: Props) {
  const classes = clsx(
    placeholderStyles.wrapper,
    isInCandidateSelection
      ? placeholderStyles.candidateSelection
      : placeholderStyles.outOfCandidateSelection
  );

  const cssVars = {
    "--placeholder-top": `${placeholderRectangle.shiftY * 100}%`,
    "--placeholder-bottom": `${
      (1 - placeholderRectangle.shiftY - placeholderRectangle.height) * 100
    }%`,
    "--placeholder-left": `${placeholderRectangle.shiftX * 100}%`,
    "--placeholder-right": `${
      (1 - placeholderRectangle.shiftX - placeholderRectangle.width) * 100
    }%`,
  } as React.CSSProperties;

  return (
    <div className={classes} style={cssVars}>
      {children}
    </div>
  );
}

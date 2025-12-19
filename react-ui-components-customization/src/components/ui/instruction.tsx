import clsx from "clsx";
import instructionStyles from "../../styles/instruction.module.css";

type Props = {
  children: string;
  cssBottom?: number;
  isInCandidateSelection: boolean;
  isPortrait?: boolean;
  fontSize?: number;
};

export function Instruction({
  children,
  cssBottom,
  isInCandidateSelection,
  isPortrait,
  fontSize,
}: Props) {
  const wrapperClasses = clsx(
    instructionStyles.wrapper,
    isPortrait
      ? instructionStyles.wrapperPortrait
      : instructionStyles.wrapperLandscape
  );

  const instructionClasses = clsx(
    instructionStyles.instruction,
    isInCandidateSelection
      ? instructionStyles.candidateSelection
      : instructionStyles.outOfCandidateSelection,
    children.length > 34 ? instructionStyles.wrap : instructionStyles.nowrap
  );

  const cssVars = {
    "--instruction-bottom":
      cssBottom !== undefined ? `${cssBottom - 10}%` : undefined,
    "--instruction-font-size":
      fontSize !== undefined ? `${fontSize}px` : undefined,
  } as React.CSSProperties;

  return (
    <div className={wrapperClasses} style={cssVars}>
      <div className={instructionClasses}>{children}</div>
    </div>
  );
}

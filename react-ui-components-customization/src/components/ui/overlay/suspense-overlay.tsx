import type { AppState } from "@innovatrics/dot-face-auto-capture/events";

import { AppStateValues } from "@innovatrics/dot-face-auto-capture/events";

import { StateOverlay } from "./state-overlay";

type Props = {
  state?: AppState;
};

export function SuspenseOverlay({ state }: Props) {
  if (!state) {
    return null;
  }

  if (state === AppStateValues.WAITING || state === AppStateValues.COMPLETE) {
    return (
      <>
        <StateOverlay isCameraReady text={"Waiting..."} />
      </>
    );
  }

  return <StateOverlay isCameraReady text={"Loading..."} />;
}

import type { CommonCustomEvent } from "@innovatrics/dot-face-auto-capture/events";
import { useEffect, useRef } from "react";

export function useEventListener(
  eventName: CommonCustomEvent<string>[keyof CommonCustomEvent<string>],
  handler: (event: Event) => void
) {
  const savedHandler = useRef<typeof handler>(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!eventName) {
      return;
    }

    const listener: typeof handler = (event) => savedHandler.current(event);

    document.addEventListener(eventName, listener);

    return () => {
      document.removeEventListener(eventName, listener);
    };
  }, [eventName]);
}

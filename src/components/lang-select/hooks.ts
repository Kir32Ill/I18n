import { useEffect, useRef } from "react";

export const useClickOutside = <T extends HTMLElement>(
  handler: (event: MouseEvent) => void
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) return;
      handler(event);
    };

    document.addEventListener("pointerdown", listener);
    return () => document.removeEventListener("pointerdown", listener);
  }, [handler]);

  return ref;
};

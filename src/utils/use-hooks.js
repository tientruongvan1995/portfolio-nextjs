import { useSyncExternalStore } from "react";

const DESKTOP_MIN_WIDTH = 1440;

const subscribe = (onChange) => {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
};

const getSnapshot = () =>
  typeof window === "undefined" ? true : window.innerWidth >= DESKTOP_MIN_WIDTH;

// Match the previous server-side default so the desktop layout renders first.
const getServerSnapshot = () => true;

export const useMediaQuery = () => {
  const isDesktop = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return [isDesktop];
};

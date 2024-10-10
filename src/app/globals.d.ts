declare global {
  interface Window {
    bootstrap: {
      Offcanvas: {
        getInstance: (element: HTMLElement) => { hide: () => void } | null;
      };
    };
  }
}

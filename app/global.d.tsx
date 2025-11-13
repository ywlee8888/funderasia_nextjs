// global.d.tsx
export {}; // Makes this a module.

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    dataLayer: { [key: string]: unknown }[]; 
    fbq: (event: string, action: string, data?: Record<string, unknown>) => void;
  }
}

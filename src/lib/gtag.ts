// lib/gtag.ts

export const GA_TRACKING_ID = "G-K510C01D65";

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      config: { [key: string]: string | number }
    ) => void;
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window === "undefined") return;

  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Track custom events
type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window === "undefined") return;

  const eventParams: { [key: string]: string | number } = {
    event_category: category,
    event_label: label ?? "",
  };

  if (typeof value === "number") {
    eventParams.value = value;
  }

  window.gtag("event", action, eventParams);
};

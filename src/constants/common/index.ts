export const storageKey = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  APP_MODE: "APP_MODE",
  APP_THEME: "APP_THEME",
  LANG_CODE: "LANG_CODE",
};

export const USER_STATUS_OPTIONS = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "disable", label: "Disable" },
];

export const ORDER_STATUS_OPTIONS = [
  { value: "all", label: "All" },
  { value: "new", label: "New orders" },
  { value: "processing", label: "Processing" },
  { value: "completed", label: "Completed" },
  { value: "canceled", label: "Canceled" },
];

export const USER_TYPE_OPTIONS = [
  { value: "all", label: "All" },
  { value: "business", label: "Business" },
  { value: "individual", label: "Individual" },
];

export const SCREENS = {
  sm: "640px",
  // => @media (min-width: 640px) { ... }

  md: "768px",
  // => @media (min-width: 768px) { ... }

  lg: "1024px",
  // => @media (min-width: 1024px) { ... }

  xl: "1280px",
  // => @media (min-width: 1280px) { ... }

  "2xl": "1536px",
  // => @media (min-width: 1536px) { ... }
};

export const STORAGE_KEY = {
  AUTH_TOKEN: "auth_token",
};

export const appRoutes = {
  dashboard: "Dashboard",
  users: "Users Management",
  oms: "Order Management",
};

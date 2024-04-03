export type NavigationMenu = {
  path: string;
  label: string;
};

export type Navigation = {
  [key: string]: NavigationMenu;
};

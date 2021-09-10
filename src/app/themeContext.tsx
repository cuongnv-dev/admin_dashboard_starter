import { createContext, useContext } from 'react';

export type GlobalThemeContent = {
  viewFull: boolean;
  setViewFull: (value: boolean) => void;
};
export const ThemeContext = createContext<GlobalThemeContent>({
  viewFull: true,
  setViewFull: () => {},
});
export const useThemeContext = () => useContext(ThemeContext);

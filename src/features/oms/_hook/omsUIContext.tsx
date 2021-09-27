import React, { createContext, useContext, useState } from "react";

export interface OmsUIEvent {
  newOrderButtonClick: () => void;
  openEditOrderPage: (id: string) => void;
  openDeleteOrderDialog: (id: string) => void;
}

export interface OmsUIContextState extends OmsUIEvent {
  ids: string[];
  setIds: (value: string[]) => void;
}

const contextDefaultValues: OmsUIContextState = {
  ids: [],
  setIds: () => {},
  newOrderButtonClick: () => {},
  openEditOrderPage: (id: string) => {},
  openDeleteOrderDialog: (id: string) => {},
};

const OmsUIContext = createContext<OmsUIContextState>(contextDefaultValues);

export function useOmsUIContext() {
  return useContext(OmsUIContext);
}

export const OmsUIConsumer = OmsUIContext.Consumer;

export interface OmsUIProviderProps {
  omsUIEvents: OmsUIEvent;
  children?: React.ReactNode;
}

export function OmsUIProvider({ omsUIEvents, children }: OmsUIProviderProps) {
  const [ids, setIds] = useState<string[]>([]);

  const value = {
    ids,
    setIds,
    newOrderButtonClick: omsUIEvents.newOrderButtonClick,
    openEditOrderPage: omsUIEvents.openEditOrderPage,
    openDeleteOrderDialog: omsUIEvents.openDeleteOrderDialog,
  };

  return (
    <OmsUIContext.Provider value={value}>{children}</OmsUIContext.Provider>
  );
}

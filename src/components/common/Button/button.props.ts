import { TxKeyPath } from "i18n/i18n";
import React from "react";

export interface ButtonProps {
  label?: string;
  txLabel?: TxKeyPath;
  preset?: "primary" | "success" | "outline" | "link";
  onClick?: (e: any) => void;
  loading?: boolean;
  className?: string;
  route?: string;
  children?: React.ReactNode;
}

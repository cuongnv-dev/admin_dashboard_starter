/* eslint-disable @typescript-eslint/no-explicit-any */

import i18n, { TxKeyPath } from "./i18n"
export function t(key: TxKeyPath, option?: any) {
  return key ? i18n.t(key, option) : null
}
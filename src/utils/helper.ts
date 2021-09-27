import { appRoutes } from 'constants/common';
import { Location } from 'history';
import { findKey, split } from 'lodash';

export function getCurrentUrl(location: Location<unknown>) {
  return location.pathname.split(/[?#]/)[0];
}

export function checkIsActive(location: Location<unknown>, url: string) {
  const current = getCurrentUrl(location);
  if (!current || !url) {
    return false;
  }

  if (current === url) {
    return true;
  }

  if (current.indexOf(url) > -1) {
    return true;
  }

  return false;
}

export function makeid(length: number) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

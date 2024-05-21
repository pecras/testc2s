import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export function SaveList(value: any) {
  storage.set('list', JSON.stringify({value}));
}

export function GetList() {
  const data = storage.getString('list');
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

export function ClearAll() {
  storage.clearAll();
}

export function SaveAllList(value: any) {
  storage.set('Alllist', JSON.stringify({value}));
}

export function GetListAll() {
  const data = storage.getString('Alllist');
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

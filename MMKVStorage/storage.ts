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

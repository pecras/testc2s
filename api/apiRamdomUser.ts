import {SaveAllList} from '../MMKVStorage/storage';
export const fetchAllUsers = async (results: number) => {
  try {
    let url = `https://randomuser.me/api/?results=${results}`;

    const response = await fetch(url);
    const data = await response.json();
    SaveAllList(data.results);
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

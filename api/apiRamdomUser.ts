export const fetchUsers = async (
  gender: string,
  number: number,
  name: string,
) => {
  try {
    let url = `https://randomuser.me/api/?results=${number}`;
    if (gender) {
      url += `&gender=${gender}`;
    }
    if (name) {
      url += `&name=${name}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

import {SaveList} from '../MMKVStorage/storage';

export const fetchFilterUsers = async (value: string, gender: string) => {
  try {
    // Define o número de resultados baseado no filtro de nome
    const resultsCount = value ? 1000 : 20;
    console.log(resultsCount);

    // Cria a URL com os parâmetros fornecidos
    let url = `https://randomuser.me/api/?results=${resultsCount}&inc=name,gender,email,nat,picture,registered,phone,location,login,id`;

    // Adiciona o filtro de gênero se fornecido
    if (gender) {
      url += `&gender=${gender}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    // Filtra os resultados se o valor for fornecido
    if (value) {
      const filteredResults = data.results.filter((user: any) => {
        const fullName = `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`;
        return fullName.includes(value.toLowerCase());
      });
      if (resultsCount === 20) {
        SaveList(filteredResults);
      }

      return filteredResults;
    }

    return data.results;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

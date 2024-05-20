import {GetListAll, SaveList} from '../MMKVStorage/storage';

export const fetchFilterUsers = async (value: string, gender: string) => {
  try {
    // Define o número de resultados baseado no filtro de nome
    const allUsers = await GetListAll();

    const resultsCount = value || gender ? 1000 : 20;

    // Cria a URL com os parâmetros fornecidos
    let url = `https://randomuser.me/api/?results=${resultsCount}&inc=name,gender,email,nat,picture,registered,phone,dob,location,login,id`;

    // Adiciona o filtro de gênero se fornecido
    if (gender) {
      url += `&gender=${gender}`;
    }

    let data;
    if (allUsers.value) {
      data = {results: allUsers.value};
    } else {
      const response = await fetch(url);
      data = await response.json();
    }

    // Filtra os resultados se o valor for fornecido
    if (value || gender) {
      const filteredResults = data.results.filter((user: any) => {
        const fullName = `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`;
        const matchesName = value
          ? fullName.includes(value.toLowerCase())
          : true;
        const matchesGender = gender ? user.gender === gender : true;
        return matchesName && matchesGender;
      });

      if (resultsCount === 20) {
        SaveList(filteredResults);
      }

      return filteredResults;
    }

    if (!allUsers.value && resultsCount === 20) {
      SaveList(data.results);
    }

    return data.results;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

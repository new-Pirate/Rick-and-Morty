
export class BASE_API {
  get(name, page = 1) {
    return this.sendRequest('GET', `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`);
  };

  sendRequest = async (method, url, body) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    };

    const config = {
      method,
      headers
    };

    if (body) {
      config.body = JSON.stringify(body);
    };

    try {
      const response = await fetch(url, config);
      const json = await response.json();
      if (!response.ok) {
        throw new Error(`Статус ошибки: ${response.status} сообщение: ${response.message}`);
      };
      return await Promise.resolve(json);
    } catch (error) {
      return await Promise.reject(error);
    };
  };
};

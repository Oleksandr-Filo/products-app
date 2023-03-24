const BASE_URL = 'https://dummyjson.com';

type Method = 'GET' | 'POST' | 'DELETE';

const request = <T>(
  url: string,
  method: Method = 'GET',
  data: any = null,
): Promise<T> => {
  const options: RequestInit = { method };
  const collectionTitle = url.slice(1);

  if (method === 'GET') {
    return fetch(BASE_URL + url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error();
        }

        return res.json();
      })
      .then(data => data[collectionTitle]);
  }

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return fetch(BASE_URL + url, options)
    .then(res => {
      if (!res.ok) {
        throw new Error();
      }

      return res.json();
    });
};

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  delete: (url: string) => request(url, 'DELETE'),
};

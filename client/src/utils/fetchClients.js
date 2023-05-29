const BASE_URL = "http://localhost:5000/api/v1";

function wait(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

function request(url, method, data) {
  const options = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = { "Content-Type": "application/json; charset=UTF-8" };
  }

  return wait(300)
    .then(() => fetch(BASE_URL + url, options))
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: url => request(url),
  post: (url, data) => request(url, "POST", data),
  patch: (url, data) => request(url, "PATCH", data),
  delete: url => request(url, "DELETE"),
};

const BASE_URL = "http://localhost:8080/api/v1";

export async function fetchApi(url, method = "GET", data = {}) {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

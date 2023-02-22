/*eslint-disable */

//suppress all warnings between comments

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? `${secret.BASE_URL}`
    : process.env.API_BASE_URL;
/*eslint-enable */

export function getWords() {
  return fetch(BASE_URL + "/word").then((response) => response.json());
}

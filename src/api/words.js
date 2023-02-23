/*eslint-disable */

//suppress all warnings between comments

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? `${secret.BASE_URL}`
    : process.env.API_BASE_URL;

const BASE_URL2 =
  process.env.NODE_ENV === "production" && secret.BASE_URL
    ? secret.BASE_URL
    : process.env.API_BASE_URL;
/*eslint-enable */

export function getWords() {
  console.log(BASE_URL2);
  return fetch(BASE_URL2 + "/word").then((response) => response.json());
}

import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const SWAGGER_API_JSON_URL = 'http://localhost:3000/api-json';

const generateApi = async () => {
  const response = await fetch(SWAGGER_API_JSON_URL);
  const json = await response.json();

  await writeFile(
    resolve(__dirname, '../dist/', 'api.json'),
    JSON.stringify(json),
  );
};

generateApi();

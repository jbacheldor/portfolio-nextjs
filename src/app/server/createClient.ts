import { createClient } from "@libsql/client";

const url =  process.env.TURSO_DATABASE_URL;
const auth_token =  process.env.TURSO_AUTH_TOKEN;

export const turso = createClient({
    url: url || '',
    authToken: auth_token
})

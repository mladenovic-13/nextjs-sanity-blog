export const apiUrl = process.env.VERCEL_URL
  ? process.env.VERCEL_URL + "/api"
  : "http://localhost:3000/api";

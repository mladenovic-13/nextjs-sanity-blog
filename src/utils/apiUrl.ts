export const apiUrl = process.env.VERCEL_URL
  ? `${process.env.NEXT_PUBLIC_API}/api`
  : "http://localhost:3000/api";

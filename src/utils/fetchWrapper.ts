export const fetchWrapper = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  });
  return res.json();
};

export const fetchCoins = (page, perPage) => {
  const data = fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&page=${page}&per_page=${perPage}`
  ).then((res) => res.json());
  return data;
};

export const fetchAllCoins = () => {
  const data = fetch("https://api.coingecko.com/api/v3/coins").then((res) =>
    res.json()
  );
  return data;
};

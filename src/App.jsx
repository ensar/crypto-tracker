import { useState } from "react";
import { useQuery } from "react-query";
import { fetchCoins } from "./api";
import Coins from "./components/Coins";
import Paginate from "./components/Paginate";
import "./style/app.css";

function App() {
  const [page, setPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const { isLoading, data } = useQuery(
    ["coins", page],
    () => fetchCoins(page, coinsPerPage),
    {
      keepPreviousData: true,
    }
  );

  const filteredCoins = data?.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='App'>
      <div>
        <input
          type='text'
          placeholder='search..'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {isLoading ? (
        <img src='../src/assets/loading.gif' width={50} height={50} />
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Coin</th>
                <th>24h%</th>
                <th>Current Price</th>
              </tr>
            </thead>
            <tbody>
              {search
                ? filteredCoins.map((f) => {
                    return <Coins coin={f} key={f.name} />;
                  })
                : data.map((coin) => {
                    return <Coins coin={coin} key={coin.name} />;
                  })}
            </tbody>
          </table>
          <Paginate page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
}

export default App;

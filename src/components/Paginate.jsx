import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchAllCoins } from "../api";
import "../style/pagination.css";

function Paginate({ page, setPage }) {
  const [pageCount, setPageCount] = useState(1);

  const { data } = useQuery("allcoins", fetchAllCoins);
  useEffect(() => {
    setPageCount(Math.ceil(data?.length / 10));
  }, [page, data]);

  const handleChange = (e) => {
    const pageNumber = e.target.innerText;
    setPage(pageNumber);
  };

  const prevPage = () => {
    if (page < 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page >= pageCount) {
      setPage(pageCount);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <div className='pagination'>
      <a onClick={() => prevPage()}>prev</a>
      {pageCount > 1 &&
        new Array(pageCount).fill().map((_, i) => {
          return (
            <a
              onClick={(e) => handleChange(e)}
              className={page == i + 1 ? "active" : ""}
            >
              {i + 1}
            </a>
          );
        })}
      <a onClick={() => nextPage()}>next</a>
    </div>
  );
}
export default Paginate;

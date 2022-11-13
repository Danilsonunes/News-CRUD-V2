import NewsList from "../NewsList/NewsList";
import * as newsService from "../../@types/NewsListService";
import { useEffect, useState } from "react";
import { Props } from "../../@types/news";
import { useNavigate } from "react-router-dom";

export default function NewsEdit() {
  let navigate = useNavigate();

  const [news, setNews] = useState<Props[]>([]);

  const loadNews = async () => {
    const res = await newsService.getNews();
    setNews(res.data);
    // console.log(res.data);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <>
      {news.map((item) => {
        return (
          <div key={item._id}>
            <NewsList newsList={item} />
            <button onClick={() => navigate(`/news/update/${item._id}`)}>
              Editar
            </button>
            <button>Deletar</button>
          </div>
        );
      })}
    </>
  );
}

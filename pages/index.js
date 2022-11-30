import { useEffect, useState } from "react";
import axios from "axios";

import NewsItem from "../components/NewsItem";
import Header from "../components/Header";

function App() {
  // variable tanpa state
  // const articleList = [
  //   {
  //     title: "Nasi goreng jawa",
  //     subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   },
  //   {
  //     title: "Nasi goreng special",
  //     subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   },
  //   {
  //     title: "Nasi goreng seafood",
  //     subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   },
  //   {
  //     title: "Nasi goreng kepiting",
  //     subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   },
  // ];

  // ini variable dengan state
  const [articleList, setArticleList] = useState([]);
  const [keyword, setKeyword] = useState("");

  const getArticle = async () => {
    try {
      const response = await axios.get("article-list");
      // console.log("response", response.data.data[0].title);

      // ini tanpa object desctructuring (contoh 1)
      // const success = response.data.success;
      // const message = response.data.message;
      // const data = response.data.data;

      // ini tanpa object desctructuring (contoh 2)
      // const data = response.data;
      // const success = data.success;
      // const message = data.message;
      // const dataResponse = data.data;

      // ini pakai object desctructuring
      const { success, message, data } = response.data;

      if (success) {
        setArticleList(data);
      } else {
        alert(message);
      }
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  useEffect(() => {
    axios.defaults.baseURL =
      "https://8340fa0f-4afd-43b9-8593-2a23fcfa580c.mock.pstmn.io/";

    getArticle();
  }, []);

  return (
    <div>
      <Header keyword={keyword} setKeyword={setKeyword} />

      <h1 style={{ color: "green" }}>Hasil pencarian &quot;{keyword}&quot;</h1>
      <h1>Hasil pencarian &quot;{keyword}&quot;</h1>

      {articleList
        .filter((item) =>
          item.title.toLowerCase().includes(keyword.toLowerCase())
        )
        .map((item, index) => (
          <NewsItem
            key={index}
            id={item.id}
            slug={item.slug}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
    </div>
  );
}

export default App;

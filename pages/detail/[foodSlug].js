import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../../components/Header";

const FoodDetail = () => {
  const router = useRouter();
  let { foodSlug } = router?.query;
  const [detail, setDetail] = useState(null);

  const getDetail = async () => {
    try {
      const response = await axios.get(`article-detail-by-slug/${foodSlug}`);
      const { success, message, data } = response.data;

      if (success) {
        setDetail(data);
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

    if (foodSlug) {
      getDetail();
    }
  }, [foodSlug]);

  return (
    <div>
      <Header />

      <h1>{detail?.title}</h1>
      <h4>{detail?.subtitle}</h4>
      <div dangerouslySetInnerHTML={{ __html: detail?.content }} />
    </div>
  );
};

export default FoodDetail;

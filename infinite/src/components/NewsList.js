import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import List from "./List";
import * as S from "./style/List";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  //API로 부터 받아온 다음 페이지 데ㅣ터 저장
  const [loading, setLoading] = useState(false);
  //추가 데이터를 로드하는지 아닌지
  const [fetching, setFetching] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2021-03-19&sortBy=publishedAt&apiKey=9e13930af2ed45e49e472714d8a895fc"
      );
      setArticles(response.data.articles);
      console.log(response);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const infiniteScroll = useCallback(() => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight && fetching === false) {
      fetchMoreData();
    }
  });

  useEffect(() => {
    fetchData();

    window.addEventListener("scroll", infiniteScroll, true);
    //스크롤 이벤트를 꼭 삭제 해줘야함
    return () => window.removeEventListener("scroll", infiniteScroll, true);
  }, []);

  const fetchMoreData = async () => {
    setFetching(true);

    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2021-03-19&sortBy=publishedAt&apiKey=9e13930af2ed45e49e472714d8a895fc"
      );
      console.log(response);
      const fetchData = response.data.articles; //피드데이터 부분
      //기존 데이터 배열과 새로 받아온 데이터 배열을 합쳐 새 배열을 만듬
      // const mergedData = articles.concat(...fetchData);
      setArticles((mergedData) => mergedData.concat(fetchData));
    } catch (e) {
      console.log(e);
    }

    setFetching(false);
  };

  //로딩중
  if (loading) {
    return <p>대기중...</p>;
  }

  if (!articles) {
    return null;
  }

  return (
    <>
      <S.Body>
        <S.Title>오늘의 News</S.Title>
        {articles.map((article) => (
          <List key={article.url} article={article}></List>
        ))}
      </S.Body>
    </>
  );
};

export default NewsList;

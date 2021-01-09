import React from "react";
import * as S from "./style/List";

const List = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <>
      <S.ListBody>
        {urlToImage && (
          <S.ListItem>
            <a href={url} target="_blank" rel="noopener noreferrer"></a>
            <img src={urlToImage} alt="이미지 사진"></img>
          </S.ListItem>
        )}
        <S.ListContent>
          <h2>{title}</h2>
          <p>{description}</p>
        </S.ListContent>
      </S.ListBody>
    </>
  );
};

export default List;

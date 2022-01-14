import { useEffect } from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { MapSearchApi } from "../../lib/api/searchAPI";
import { test } from "../../lib/api/testAPI";
import { mapListState } from "../../lib/atom/map";
import ListItem from "./ListItem";

const List = () => {
  const [mapList, setMapList] = useRecoilState(mapListState);

  useEffect(() => {
    MapSearchApi();

    test().then((res) => {
      setMapList(res);
    });
  }, []);

  return (
    <Container>
      <SearchWrapper>
        <div className="search-bar">
          <input type="text" placeholder="티랩스튜디오 장소를 검색해주세요" />
        </div>
      </SearchWrapper>
      <FilterWrapper>
        <span>{mapList?.length}개</span>
        <div className="filter-item-box">filter</div>
      </FilterWrapper>
      {mapList?.map((item: any) => (
        <ListItem key={item.index} item={item} />
      ))}
    </Container>
  );
};

export default List;

const Container = styled.div`
  width: 30%;
  min-width: 20rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  z-index: 1;
  box-shadow: 7px 0px 14px rgba(164, 164, 164, 0.25);
`;

const SearchWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  & input {
    width: 100%;
    outline: none;
    padding: 15px;
    box-sizing: border-box;
    font-size: 16px;
    border: 1px solid #ededed;
    border-radius: 5px;
  }
`;

const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  .filter-item-box {
    padding: 7px 20px;
    border-radius: 20px;
    border: 1px solid #ededed;
    cursor: pointer;
    transition: all 0.5s;

    :hover {
      background: black;
      color: white;
    }
  }
`;

import styled from "@emotion/styled";
import React from "react";
import { DistanceHook } from "../lib/hook/distanceHook";

interface Props {
  item: any;
}

const ListItem = ({ item }: Props) => {
  return (
    <ItemWrapper>
      <a href="https://booking.naver.com/booking/6/bizes/435988">{item.name}</a>
      <CategroyList>
        {item.category.map((item: string, idx: number) => (
          <span key={idx}>{item}</span>
        ))}
      </CategroyList>
      <span className="sales-time-text">{item.bizhourInfo}</span>
      <CategroyList>
        {item.shortAddress.map((item: string, idx: number) => (
          <span key={idx} id="address-color">
            {item}
          </span>
        ))}
      </CategroyList>
      <span className="distance-text">
        현재 내 위치에서 <strong>{DistanceHook(item.distance)}</strong>
      </span>
    </ItemWrapper>
  );
};

export default ListItem;

const ItemWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-bottom: 1px solid #ededed;

  & a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  .sales-time-text {
    margin-top: 10px;
    font-size: 14px;
  }

  .distance-text {
    font-size: 14px;

    strong {
      color: red;
    }
  }
`;

const CategroyList = styled.div`
  margin: 5px 0;

  span {
    font-size: 14px;
    color: gray;
  }

  #address-color {
    color: black;
    font-weight: 500;
  }
`;

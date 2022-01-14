import React from "react";
import { DistanceHook } from "../../lib/hook/distanceHook";
import * as S from "./style";

interface Props {
  item: any;
}

const ListItem = ({ item }: Props) => {
  return (
    <S.ItemContainer>
      <S.ItemWrapper>
        <S.TitleWrapper>{item.name}</S.TitleWrapper>
        <S.CategroyList>
          {item.category.map((item: string, idx: number) => (
            <span key={idx}>{item}</span>
          ))}
        </S.CategroyList>
        <span className="sales-time-text">{item.bizhourInfo}</span>
        <S.CategroyList>
          {item.shortAddress.map((item: string, idx: number) => (
            <span key={idx} id="address-color">
              {item}
            </span>
          ))}
        </S.CategroyList>
        <span className="distance-text">
          현재 내 위치에서 <strong>{DistanceHook(item.distance)}</strong>
        </span>
        <S.ApplyWrapper>
          <a href={item.naverBookingUrl}>예약</a>
        </S.ApplyWrapper>
      </S.ItemWrapper>
      <img src={item.thumUrl} alt="스튜디오이미지" />
    </S.ItemContainer>
  );
};

export default ListItem;

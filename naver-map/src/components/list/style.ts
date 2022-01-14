import styled from "@emotion/styled";

export const ItemContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  border-bottom: 1px solid #ededed;

  & img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid #ededed;
    margin-left: 1rem;
  }
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

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

export const TitleWrapper = styled.div`
  font-weight: 700;
`;

export const CategroyList = styled.div`
  margin: 5px 0;

  span {
    font-size: 14px;
    color: gray;
  }

  #address-color {
    color: #4a4a4a;
    font-weight: 500;
  }
`;

export const ApplyWrapper = styled.div`
  margin-top: 10px;

  & a {
    text-decoration: none;
    color: black;
    font-size: 14px;
    background: white;
    padding: 6px 10px;
    border: 1px solid #ededed;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.5s;

    :hover {
      background: black;
      color: white;
    }
  }
`;

import styled from "styled-components";

const ListBody = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  width: 55%;
  border-bottom: 1px solid gray;
`;

const ListContent = styled.div`
  margin: 10px;
`;

const ListItem = styled.div`
  img {
    width: 200px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid gray;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export { ListBody, ListContent, ListItem, Title, Body };

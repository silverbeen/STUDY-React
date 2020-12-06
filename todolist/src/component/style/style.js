import styled from "styled-components";

/* App */
const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

/* from  */

const Title = styled.h1`
  font-size: 20px;
  margin: 30px;
  color: #089193;
  font-size: 40px;
`;

const Input = styled.div`
  form {
    display: flex;
    flex-direction: row;
  }
`;

const InputValue = styled.input`
  outline: none;
  border: 2px solid #089193;
  border-radius: 10px;
  width: 80%;
  padding: 5px 15px;
  margin: 0 10px;
`;

const List = styled.div``;

const Ul = styled.ul``;

const Button = styled.button`
  width: 60px;
  padding: 5px;
  background-color: #089193;
  border: none;
  color: #fff;
  border-radius: 10px;
  outline: none;
`;

const Li = styled.li`
border: 2px solid #089193;
  padding: 25px;
  margin: 15px;
`;

const Modify = styled.div``;

const ModifyInput = styled.input``;

const ModifyValue = styled.span``;

const ModifyButton = styled.button`
  margin: 10px;
  padding: 5px;
  background-color: #089193;
  border: none;
  color: #fff;
  border-radius: 10px;
  outline: none;
`;

const ModifyDelete = styled(ModifyButton)``;

export {
  Main,
  Title,
  Input,
  InputValue,
  List,
  Ul,
  Button,
  Li,
  Modify,
  ModifyInput,
  ModifyValue,
  ModifyButton,
  ModifyDelete,
};

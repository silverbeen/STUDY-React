import React, { Component } from "react";
import * as S from './component/style/style';
import ToDoForm from "./component/ToDoForm";
import ToDoList from "./component/ToDoList";
import "./App.css";

class App extends Component {
  id = 4;
  state = {
    ToDolist: [
      {
        id: 1,
        text: "러닝 뛰기",
      },
      {
        id: 2,
        text: "공부하기",
      },
      {
        id: 3,
        text: "독서하기",
      },
    ],
    search: "",
  };

  handleCreate = (data) => {
    const { ToDolist } = this.state;

    this.setState({
      ToDolist: ToDolist.concat({
        id: this.id++,
        ...data,
      }),
    });
  };

  /* 수정하기 */
  handleUpdate = (id, data) => {
    console.log(id);
    console.log(data);

    const { ToDolist } = this.state;

    this.setState({
      ToDolist: ToDolist.map((ToDolist) => {
        console.log(ToDolist);
        if (ToDolist.id === id) {
          return {
            id,
            ...data,
          };
        }
        return ToDolist;
      }),
    });
  };

  /* id 값을 가져와 filter 메소들 받아온 id 갑이 틀린것만 반환하고 다르면 반환 안함 */
  handleRemove = (id) => {
    const { ToDolist } = this.state;

    this.setState({
      ToDolist: ToDolist.filter((data) => data.id !== id),
    });
  };

  render() {
    const { ToDolist } = this.state;
    return (
      <S.Main>
        <ToDoForm onCreate={this.handleCreate} />
        <ToDoList
          data={ToDolist}
          onUpdate={this.handleUpdate}
          onRemove={this.handleRemove}
        />
      </S.Main>
    );
  }
}

export default App;

import React, { Component } from "react";
import * as S from "./style/style";

class ToDoForm extends Component {
  state = {
    text: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      text: "",
    });
  };
  render() {
    const { text } = this.state;
    return (
      <S.Input>
        <form onSubmit={this.handleSubmit}>
          {/* 입력 받은 값을 state 에 저장하고 onsubmit 발생하면 값을 보냄  */}
          <S.InputValue
            value={text}
            name="text"
            placeholder="..입력"
            onChange={this.handleChange}
          ></S.InputValue>
          <S.Button type="submit">추가</S.Button>
        </form>
      </S.Input>
    );
  }
}

export default ToDoForm;

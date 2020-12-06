import React, { Component } from 'react';
import * as S from './style/style';

class ToDoInfo extends Component {
  state = {
    toggle: false,
    text  : '',
    style : {
      margin: '10px',
    },
  };

  handleChange = ( e ) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleToggleChange = () => {
    const { toggle, text } = this.state;
    const { data, onUpdate } = this.props;
    // false -> true
    if (!toggle) {
      this.setState({
        text  : data.text,
        toggle: true,
      });
    } else {
      onUpdate(data.id, { text: text });
      this.setState({
        toggle: false,
      });
    }
    // ture -> false
  };

  handleRemove = () => {
      const { data, onRemove } = this.props;
      onRemove(data.id);
  };

  render() {
    const { data } = this.props;
    const { toggle, text } = this.state;

    return (
      <S.Modify>
        {toggle ? (
          <S.ModifyInput
            style={this.state.style}
            onChange={this.handleChange}
            value={text}
            name="text"
          ></S.ModifyInput>
        ) : (
          <S.ModifyValue style={this.state.style}>{data.text}</S.ModifyValue>
        )}
        <S.ModifyButton onClick={this.handleToggleChange}>{toggle ? '수정완료' : '수정하기'}</S.ModifyButton>
        <S.ModifyDelete onClick={this.handleRemove}>삭제</S.ModifyDelete>
      </S.Modify>
    );
  }
}

export default ToDoInfo;
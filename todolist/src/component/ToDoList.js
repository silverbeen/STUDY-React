import React, { Component } from 'react';
import * as S  from './style/style';
import ToDoInfo from './ToDoInfo';

class ToDoList extends Component {
  state = {
    style: {
      border: '1px solid black',
      padding: '25px',
      margin: '15px',
    },
  };
  render() {
    const { data, onUpdate, onRemove } = this.props;

    return (
      <S.List>
        <S.Ul>
          {data.map((data) => (
            <S.Li style={this.state.style}>
              <ToDoInfo data={data} onUpdate={onUpdate} onRemove={onRemove} />
            </S.Li>
          ))}
        </S.Ul>
      </S.List>
    );
  }
}

export default ToDoList;
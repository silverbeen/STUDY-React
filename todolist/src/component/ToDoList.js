import React, { Component } from 'react';
import * as S  from './style/style';
import ToDoInfo from './ToDoInfo';

class ToDoList extends Component {
  render() {
    const { data, onUpdate, onRemove } = this.props;

    return (
      <S.List>
        <S.Ul>
          {data.map((data) => (
            <S.Li >
              <ToDoInfo data={data} onUpdate={onUpdate} onRemove={onRemove} />
            </S.Li>
          ))}
        </S.Ul>
      </S.List>
    );
  }
}

export default ToDoList;
// todo 배열을 props로 받아 온 후, 이를 map 함수를 사용해서 여러 개의 TodoListitem 컴포넌트로 변환하여 보여준다.

import React from 'react';
import styled from 'styled-components';
import TodoListitem from './TodoListitem';

const Todolistdiv = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <Todolistdiv>
      <TodoListitem />
      <TodoListitem />
      <TodoListitem />
      <TodoListitem />
    </Todolistdiv>
  );
};

export default TodoList;

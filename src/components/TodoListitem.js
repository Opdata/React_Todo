// 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트, todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 보여준다.

import React from 'react';
import { MdCheckBox, MdRemoveCircleOutline, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styled from 'styled-components';

const Maindiv = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  &:nth-child(even) {
    background: #f8f9fa;
  }

  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

const Checkbox = styled.div`
  cursor: pointer;
  flex: 1; /* 차지할 수 있는 모든 영역 차지 */
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  svg {
    font-size: 1.5rem;
  }
  &.checked {
    svg {
      color: #22b8cf;
    }
    text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
`;

const TodoListitem = () => {
  return (
    <Maindiv>
      <Checkbox>
        <MdCheckBoxOutlineBlank />
        <Text>할 일</Text>
      </Checkbox>
      <Remove>
        <MdRemoveCircleOutline />
      </Remove>
    </Maindiv>
  );
};

export default TodoListitem;

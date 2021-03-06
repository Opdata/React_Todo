// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트 state를 통해 인풋의 상태를 관리

import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const MainForm = styled.form`
  display: flex;
  background: #495057;
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: #dee2e6;
  }
  flex: 1;
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');

      //submit은 브라우저 새고로침 발생시킨다.
      // 이를 방지하는 기능
      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <MainForm onSubmit={onSubmit}>
      <Input placeholder='할 일을 입력하세요' value={value} onChange={onChange} />
      <Button type='submit'>
        <MdAdd />
      </Button>
    </MainForm>
  );
};

export default TodoInsert;

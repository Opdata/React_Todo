// 화면을 가운데에 정렬시켜주며, 일정관리를 보여준다. children 으로 내부 jsx를 props로 받아 렌더링해준다.

import React from 'react';
import styled from 'styled-components';

const Maindiv = styled.div`
  width: 512px;
  /* width가 주어진 상태에서 좌우 중앙 정렬*/
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;

const Title = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  background: white;
`;

const TodoTemplate = ({ children }) => {
  return (
    <Maindiv className='TodoTemplate'>
      <Title className='app-title'>일정 관리</Title>
      <Body className='content'>{children}</Body>
    </Maindiv>
  );
};

export default TodoTemplate;

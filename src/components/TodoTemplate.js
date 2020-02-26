// 화면을 가운데에 정렬시켜주며, 일정관리를 보여준다. children 으로 내부 jsx를 props로 받아 렌더링해준다.

import React from 'react';
import classnames from 'classnames';

const TodoTemplate = ({ children }) => {
  return (
    <div className='TodoTemplate'>
      <div className='app-title'>일정 관리</div>
      <div className='content'>{children}</div>
    </div>
  );
};

export default TodoTemplate;

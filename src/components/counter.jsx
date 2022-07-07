// 프리젠테이셔널 컴포넌트 만들기
// 프리젠테이셔널 컴포넌트란, 리덕스 스토어에 직접 접근하지 않고 필요한 값 또는 함수를 props 로만 받아와서 사용하는 컴포넌트이다.

import React from 'react';

const Counter = ({ number, diff, onIncrease, onDecrease, onSetDiff }) => {
  const onChange = (e) => {
    onSetDiff(parseInt(e.target.value, 10));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;

//프리젠테이셔널 컴포넌트에선 주로 UI를 선언하는 것에 집중하며, 필요한 값들이나 함수는 props 로 받아와서 사용하는 형태로 구현한다.

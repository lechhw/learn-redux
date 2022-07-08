import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/counter';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook이다.
  // state 의 값은 store.getState() 함수를 호출 했을 때 나타나는 결과물과 동일하다.

  // const { number, diff } = useSelector((state) => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff,
  // }));

  // 위와 같이 작성하면 useSelector Hook 을 통해 매번 렌더링 될 때마다 새로운 객체 { number, diff }를 만드는 것이기 때문에 상태가 바뀌었는지 바뀌지 않았는지 확인을 할 수 없어서 낭비 렌더링이 발생하게된다.

  // 이를 최적화 하기 위한 2가지 방법
  // 1. useSelector 여러번 사용하기
  const number = useSelector((state) => state.counter.number);
  const diff = useSelector((state) => state.counter.diff);

  // 2. react-redux의 shallowEqual 함수를 useSelector의 두번째 인자로 전달해주기
  // useSelector 의 두번째 파라미터는 equalityFn 이다. equalityFn 은 이전 값과 다음 값을 비교하여 true 가 나오면 리렌더링을 하지 않고 false 가 나오면 리렌더링을 한다.
  // shallowEqual은 react-redux에 내장되어있는 함수로서, 객체 안의 가장 겉에 있는 값들을 모두 비교해준다.

  // const { number, diff } = useSelector(
  //   (state) => ({
  //     number: state.counter.number,
  //     diff: state.counter.diff,
  //   }),
  //   shallowEqual
  // );

  // useDispatch는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 이다.
  const dispatch = useDispatch();

  // 각 액션들을 디스패치하는 함수를 생성한다.
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      // 상태와
      number={number}
      diff={diff}
      // 액션을 디스패치하는 함수들을 props 로 넣어준다.
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;

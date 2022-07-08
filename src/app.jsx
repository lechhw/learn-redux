import React from 'react';
import CounterContainer from './containers/counterContainer';
import TodosContainer from './containers/todosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;

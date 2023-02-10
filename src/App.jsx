import React from 'react';
import Header from './components/Header/Header';
import DateList from './components/Date/DateList';
import { TodoContextProvider }  from './components/store/todo-ctx';
import Todo from './components/Todo/Todo';

function App() {
  return <TodoContextProvider>
    <Header/>
    <DateList/>
    <Todo/>
  </TodoContextProvider>
}

export default App

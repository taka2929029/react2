import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodo } from "./components/incompleteTodos";
import { CompleteTodo } from "./components/completeTodos";

export const App = () => {
  const [todoText, settodoText] = useState("");
  const [incompleteTodos, setincompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  const onchangeTodoText = (event) => settodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
    settodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setincompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...completeTodos];
    newIncompleteTodos.splice(index, 1);
    setincompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setcompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newcompleteTodos = [...incompleteTodos];
    newcompleteTodos.splice(index, 1);
    setcompleteTodos(newcompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setincompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onchangeTodoText={onchangeTodoText}
        onClickAdd={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個までです</p>
      )}
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />

      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onchangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTOD</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTOD</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

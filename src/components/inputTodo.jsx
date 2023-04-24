import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onchangeTodoText, onClickAdd, disabled } = props;
  return (
    // <div className="input-area">
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onchangeTodoText}
      />
      <button disabled={disabled} onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
};

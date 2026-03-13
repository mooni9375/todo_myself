import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos }) => {
  console.log(todos);
  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default List;

import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos }) => {
  console.log(todos);
  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {/* 리스트 형태로 랜더링 된 컴포넌트들이나 요소들을 서로 구분할 때 'key' prop으로 구분 */}
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;

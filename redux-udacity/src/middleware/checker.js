import { ADD_TODO } from "../actions/todos";
import { ADD_GOAL } from "../actions/goals";

function checker(store) {
  return (next) => (action) => {
    if (
      action.type === ADD_TODO &&
      action.todo.name.toLowerCase().includes("bitcoin")
    ) {
      return alert("Nope. That's a bad ideia");
    } else if (
      action.type === ADD_GOAL &&
      action.goal.name.toLowerCase().includes("bitcoin")
    ) {
      return alert("Nope. That's a bad ideia");
    } else {
      return next(action);
    }
  };
}

export default checker;

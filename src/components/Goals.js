import React from "react";
import { connect } from "react-redux";
import List from "./List";
import { handleAddGoal, handleDeleteGoal } from "../actions/goals";

function Goals(props) {
  const goalInput = React.useRef(null);

  const { dispatch } = props;

  const addItem = (event) => {
    event.preventDefault();

    dispatch(handleAddGoal(goalInput.current, () => (goalInput.current = "")));
  };
  const handleChange = (event) => (goalInput.current = event.target.value);

  const removeItem = (goal) => {
    dispatch(handleDeleteGoal(goal));
  };
  return (
    <div>
      <h1>Goals</h1>
      <input
        type="text"
        placeholder="Add Goal"
        ref={goalInput}
        onChange={handleChange}
      ></input>
      <button onClick={addItem}>Add Todo</button>
      <List items={props.goals} remove={removeItem} />
    </div>
  );
}

export default connect((state) => ({
  goals: state.goals,
}))(Goals);

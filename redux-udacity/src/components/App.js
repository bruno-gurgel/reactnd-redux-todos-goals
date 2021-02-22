import React, { useEffect } from "react";
import { connect } from "react-redux";
import ConnectedTodos from "./Todos";
import ConnectedGoals from "./Goals";
import { handleInitialData } from "../actions/shared";

function App(props) {
  const { dispatch } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(handleInitialData()), []);

  if (props.loading === true) {
    return <h3>Loading</h3>;
  }

  return (
    <div>
      <ConnectedTodos />
      <ConnectedGoals />
    </div>
  );
}

export default connect((store) => ({
  loading: store.loading,
}))(App);

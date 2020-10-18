import React from 'react';
import { connect } from 'react-redux';
import { Button, decrementAction, incrementAction } from 'll-pkg';
import './App.css';

function App({ decrementAction, count, incrementAction}) {
  return (
    <div className="App">
      <h2>This is a counter</h2>
      <Button text="-" onClick={decrementAction} />
      <span>{count}</span>
      <Button text="+" onClick={incrementAction} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.counterReducer.count
})

const mapDispatchToProps = {
  decrementAction,
  incrementAction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

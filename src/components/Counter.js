import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterActions';

const Counter = ({ value, increment, decrement, reset }) => (
  <div style={{ textAlign: 'center', padding: 16 }}>
    <h1>{value}</h1>
    <br />
    <button type="button" onClick={() => increment(value)}>
      Increment
    </button>
    <button type="button" onClick={() => decrement(value)}>
      Decrement
    </button>
    <button type="button" onClick={reset}>
      Reset
    </button>
  </div>
);
const mapStateToProps = state => ({
  value: state,
});
const mapDispatchToProps = { increment, decrement, reset };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

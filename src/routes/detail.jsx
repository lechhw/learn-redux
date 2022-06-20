import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = ({ toDos }) => {
  const id = useParams();
  const paramsText = toDos.find((toDo) => toDo.id === parseInt(id));
  console.log(id);
  return (
    <>
      <h1>{paramsText?.text}</h1>
      <h5>Created at: </h5>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    toDos: state,
  };
}
export default connect(mapStateToProps)(Detail);

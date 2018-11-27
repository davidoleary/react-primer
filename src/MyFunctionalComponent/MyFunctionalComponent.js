import React from "react";

function MyFunctionalComponent(props) {
  return (
    <div>
      This is a functional component
      React {props.version || 16} Documentation
    </div>
  )
}

export default MyFunctionalComponent;

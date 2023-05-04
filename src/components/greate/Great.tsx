import React from "react";
type GreatProps ={
    name?:string
}
function Great(props:GreatProps) {
  return <div>Hello {props.name}</div>;
}

export default Great;

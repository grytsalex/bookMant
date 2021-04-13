import React, { useState } from "react";
import Input from "@material-ui/core/Input";

export const Search = () => {
  const [ text, setText ] = useState('');

  return (
    <div>
      <Input />
    </div>
  );
};

// const addAsyncTodo = () =>  {
//     return async dispatch => {
//         setTimeout(() => {
//             dispatch(addTodo('ASYNC TODO'))
//         }, 2000)
//     }
// }

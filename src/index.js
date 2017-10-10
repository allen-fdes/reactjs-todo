import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import TodoList from './TodoList.js';

var destination = document.querySelector("#root")
ReactDom.render(<div>
    <TodoList></TodoList>
</div>,destination);
import React, { Component } from "react";

import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import AddItemForm from "../add-item-form";

import './app.css';

export default class App extends Component {

    maxId = 100;
    state = {
        todoData: [
            { label: 'Drink Coffee',  id: 1 },
            { label: 'Drink Tea', id: 2 },
            { label: 'Build REACT APP', id: 3 },
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
          const inx = todoData.findIndex((el) => el.id === id);
          const before = todoData.slice(0, inx);
          const after = todoData.slice(inx + 1);

          const newArray = [...before, ...after];
          return {
              todoData: newArray,
          }
        });
    };

    addItem = (text) => {
       const newItem = {
           label: text,
           id: this.maxId++
       };
        this.setState(({ todoData }) => {
            const arrayCopy = [ ...todoData, newItem ];

            return {
                todoData: arrayCopy,
            }
        });
    };

    render() {
        return (
            <div className="todo-app" >
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex" >
                    <SearchPanel />
                    < ItemStatusFilter />
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem }/>
                <AddItemForm
                    onItemAdded={this.addItem}/>
            </div>
        );
    }
}
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
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Drink Tea'),
            this.createTodoItem('Build REACT APP'),
        ],
        term: '',
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    }

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
       const newItem = this.createTodoItem(text);
        this.setState(({ todoData }) => {
            const arrayCopy = [ ...todoData, newItem ];

            return {
                todoData: arrayCopy,
            }
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1),
        ];
    }

    onToggleDone = (id) => {
       this.setState(({ todoData }) => {
           return {
               todoData: this.toggleProperty(todoData, id, 'done')
           };
       });
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onSearchChange = (term) => {
        this.setState({
            term,
        });
    };

    search(items, term) {
       if(term.length === 0) {
           return items;
       }
       return items.filter((item) => {
           return item.label
               .toLowerCase()
               .indexOf(term.toLowerCase()) > -1;
       })
    }

    render() {
        const { todoData, term } = this.state;
        const visibleItems = this.search(todoData, term);
        const doneCount = todoData.filter((el) => el.done).length;

        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app" >
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex" >
                    <SearchPanel
                         onSearchChange={this.onSearchChange}/>
                    < ItemStatusFilter />
                </div>

                <TodoList
                    todos={visibleItems}
                    onDeleted={ this.deleteItem }
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />
                <AddItemForm
                    onItemAdded={this.addItem}/>
            </div>
        );
    }
}
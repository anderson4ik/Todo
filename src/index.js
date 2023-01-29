import React from "react";
import ReactDOM from 'react-dom/client';

import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ItemStatusFilter from "./components/item-status-filter";

import './index.css';

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Drink Tea', important: false, id: 2 },
        { label: 'Build REACT APP', important: true, id: 3 },
    ]

    return (
        <div className="todo-app" >
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex" >
                <SearchPanel />
                < ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    );
}

const e_target = document.getElementById('root');
const root = ReactDOM.createRoot(e_target);
root.render(<App />);
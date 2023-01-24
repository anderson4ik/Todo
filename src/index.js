import React from "react";
import ReactDOM from 'react-dom/client';

import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false },
        { label: 'Drink Tea', important: false },
        { label: 'Build REACT APP', important: true },
    ]

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
}

const e_target = document.getElementById('root');
const root = ReactDOM.createRoot(e_target);
root.render(<App />);
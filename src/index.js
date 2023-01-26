import React from "react";
import ReactDOM from 'react-dom/client';

import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Drink Tea', important: false, id: 2 },
        { label: 'Build REACT APP', important: true, id: 3 },
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
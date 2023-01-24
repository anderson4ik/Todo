import React from "react";
import ReactDOM from 'react-dom/client';

import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
}

const e_target = document.getElementById('root');
const root = ReactDOM.createRoot(e_target);
root.render(<App />);
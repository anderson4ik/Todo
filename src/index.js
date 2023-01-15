import React from "react";
import ReactDOM from 'react-dom/client';

const TodoList = () => {
    return (
        <ul>
            <li>Drink Coffee</li>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    );
}

const AppHeader = () => {
    return <h1>My Todo list</h1>;
}

const SearchPanel = () => {
    return <input placeholder="search"/>;
}

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
"use client"

import { useState } from "react"

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState("");

    const addTodo = () => {
        if (inputValue.trim() === "") return;
        setTodos([
            ...todos,
            { id: Date.now(), text: inputValue, completed: false },

        ])
        setInputValue("");
    }

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )

    };
    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id
        ))
    };
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-blue-700 text-while py-4">
                <div className="max-w-4xl mx-auto text-white py-4">
                    <h1>
                        TODO LIST
                    </h1>
                    <p> ORGANIZE YOUR WORK</p>
                </div>

            </header>
            <main className="flex-grow flex items-center justify-center">
                <div className="max-w-md-auto p-4 bg-slate-400 rounded-lg ">
                    <div className="mb-4">
                        <div className="flex">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="flex-grow p-2 border border-gray-400 rounded-lg"
                                placeholder="Add a new task..." />
                            <button
                                onClick={addTodo}
                                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg  hovor:bg-sky-600">
                                Add



                            </button>

                        </div>

                    </div>
                    <ul className="space-y-2">
                        {todos.map((todo) => (
                            <li key={todo.id}
                                className={`flex items-center justify-between p-2 border border-slate-700 rounded-lg ${todo.completed ? "bg-lime-500 line-through" : "bg-slate-600"
                                    }`}>
                                <span>{todo.text}</span>
                                <div>
                                    <button
                                        onClick={() => toggleTodo(todo.id)}
                                        className="px-2 py-1 text-sm bg-orange-500 rounded-lg hover:bg-gray-500">
                                        {todo.completed ? "undo" : "completed"}
                                    </button>
                                    <button
                                        onClick={() => deleteTodo(todo.id)}
                                        className="px-2 py-1 text-sm bg-orange-500 rounded-lg hover:bg-gray-500">
                                        DELETE
                                    </button>
                                </div>

                            </li>
                        )
                        )}
                    </ul>
                </div>
            </main>

        </div>
    )

}
export default TodoList
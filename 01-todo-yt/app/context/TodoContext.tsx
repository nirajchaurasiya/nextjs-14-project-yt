"use client";
import React from "react";
import { Todo } from "../lib/definitions";

type TodoContextProps = {
  todo: Array<Todo>;
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  addTodo: (title: string, desc: string, date: string) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, title: string, desc: string) => void;
};

export const TodoContext = React.createContext<TodoContextProps | null>(null);

export default function TodoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todo, setTodo] = React.useState<Todo[]>([]);

  const addTodo = (title: string, desc: string, date: string) => {
    setTodo((prev) => [
      ...prev,
      { id: todo.length + 1, title: title, desc: desc, date: date },
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodo((prevTodo) => prevTodo.filter((e) => e.id !== id));
  };

  const editTodo = (id: number, title: string, desc: string) => {
    setTodo((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          // Update the 'title' property for the matching 'id'
          return { ...todo, title: title, desc: desc };
        }
        // For other elements, return them unchanged
        return todo;
      });
    });
  };

  const allValues = {
    todo,
    setTodo,
    addTodo,
    deleteTodo,
    editTodo,
  };
  return (
    <TodoContext.Provider value={allValues}>{children}</TodoContext.Provider>
  );
}

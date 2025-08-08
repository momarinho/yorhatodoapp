# 🤖 Task Management System

![React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4-purple?logo=vite&logoColor=white)
![LocalStorage](https://img.shields.io/badge/LocalStorage-Persistence-green)

A simple yet powerful client-side task management application built with **React** and **TypeScript**. This project demonstrates fundamental React concepts, including a component-based architecture, state management with hooks, and data persistence using the browser's `localStorage`.

## ✨ Features

- **Add New Tasks:** Easily create new tasks with a simple input field.
- **Toggle Completion:** Mark tasks as complete or incomplete with a single click.
- **Delete Tasks:** Permanently remove tasks from your list.
- **Persistent Data:** All your tasks are saved locally in your browser, so they remain even after you close the tab.
- **Dynamic Stats:** A summary panel shows a real-time count of active, completed, and total tasks, as well as a progress percentage.
- **Task Filtering:** Filter tasks to view all, only active, or only completed items.
- **Clear Completed:** A dedicated button allows you to remove all completed tasks at once.

## 🚀 Getting Started

To run this project locally, follow these simple steps.

### Prerequisites

Make sure you have **Node.js** and **npm** (or Yarn) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone <YOUR_REPOSITORY_URL>
    cd <project_folder_name>
    ```

2.  Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

The application will be available at `http://localhost:5173` in your browser.

## 📁 Project Structure

The project structure follows a standard for React applications, making it easy to navigate and understand the codebase.

src/
├── assets/
│   ├── components/       # Reusable React components
│   ├── styles/           # CSS files for styling
│   └── ...
├── App.tsx               # Main application component and state manager
├── main.tsx              # Entry point for the application
└── ...


## 🧠 How It Works

- The **`App.tsx`** component serves as the main container and manages the global state of the todos using the `useState` hook.
- The **`useEffect`** hook is used to synchronize the todo list with `localStorage`, ensuring that data is automatically saved and loaded.
- The UI is broken down into smaller, more manageable components, such as **`Header`**, **`Stats`**, **`AddTodo`**, and **`TodoList`**.
- The **`TodoList`** component manages its own filter state (`'all'`, `'active'`, `'completed'`) and renders the appropriate `TodoItem` components.
- Each **`TodoItem`** handles the display of a single task and triggers functions passed down via props to update the global state when the task is changed or deleted.

## 📄 License

This project is intended for portfolio use and is available for study. Feel free to inspect, copy, and adapt the code for your own projects.

-------------------

"Glory to mankind"
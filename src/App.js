import React from "react";
import { AuthContextProvider } from "./contexts/AuthContext";
import { TasksContextProvider } from "./contexts/TasksContext";
import { NotesContextProvider } from "./contexts/NotesContext";
import AppRoutes from "./AppRoutes";

const App = () => (
  <AuthContextProvider>
    <TasksContextProvider>
      <NotesContextProvider>
        <AppRoutes />
      </NotesContextProvider>
    </TasksContextProvider>
  </AuthContextProvider>
);

export default App;

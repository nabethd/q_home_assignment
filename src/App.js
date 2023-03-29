import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import TopBar from "./Components/TopBar/TopBar";
import People from "./Components/People";
import "./App.css";

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <TopBar />
        <People />
      </div>
    </QueryClientProvider>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css';
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/news" element={<NewsList />} />
            <Route
              path="/news/:newsId"
              element={<NewsDetail />}
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;

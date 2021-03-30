import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css';
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";
import NotFound from "./pages/NotFound";
import UsersList from "./pages/UsersList";
import ArticleAdd from "./pages/ArticleAdd";
import ArticlesList from "./pages/ArticleList";
import Menu from './components/menu'
import { Layout } from 'antd';
import SignIn from "./pages/SignIn";

const { Header, Footer, Sider, Content } = Layout;
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Layout>
          <Sider>
            <Menu />
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content>
              <Router>
                <Routes>
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/article" element={<ArticlesList />} />
                  <Route path="/article/add" element={<ArticleAdd />} />
                  <Route path="/users" element={<UsersList />} />
                  <Route path="/news" element={<NewsList />} />
                  <Route
                      path="/news/:newsId"
                      element={<NewsDetail />}
                  />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </Router>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </QueryClientProvider>
  );
}

export default App;

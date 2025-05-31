import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import AboutPage from "./pages/AboutPage";

import PostsPage from "./pages/PostsPage";
import DefaultLayout from "./layouts/DefaultLayout";

import path from "./data/path";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path={path.HOME()} element={<HomePage />} />
            <Route path={path.ABOUT()} element={<AboutPage />} />
            <Route path={path.POSTS()} element={<PostsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

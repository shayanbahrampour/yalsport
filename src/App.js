import "./App.css";
import "./styles/app.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./screens/Home";
import Page from "./components/Page";
import HomeV2 from "./screens/HomeV2";
import HomeV3 from "./screens/HomeV3";
import Preview from "./screens/Preview";

const data = [
  { id: 1, title: "First", content: "Hello world!" },
  { id: 2, title: "Second", content: "Hello again!" },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Page>
              <Home />
            </Page>
          }
        />

        <Route
          path="/homev2"
          element={
            <Page>
              <HomeV2 />
            </Page>
          }
        />
        <Route
          path="/homev3"
          element={
            <Page>
              <HomeV3 />
            </Page>
          }
        />

        <Route
          path="/preview"
          element={
            <Page>
              <Preview />
            </Page>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

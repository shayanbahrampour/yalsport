import './App.css';
import './styles/app.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './screens/Home';
import Page from './components/Page';
import HomeV2 from './screens/HomeV2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Page>
              <Home />
            </Page>
          }
        />
        <Route
          path='/homev2'
          element={
            <Page>
              <HomeV2 />
            </Page>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

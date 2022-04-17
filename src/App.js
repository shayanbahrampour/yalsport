import './App.css';
import './styles/app.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './screens/Home';
import Page from './components/Page';
import Writings from './screens/Writings';

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
          path='/writings'
          element={
            <Page>
              <Home />
            </Page>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

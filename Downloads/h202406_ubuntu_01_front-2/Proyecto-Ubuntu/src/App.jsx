import "bootstrap/dist/css/bootstrap.min.css";
import theme from "./config/theme.js";
import LoginPage from './assets/components/LoginPage.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from "@mui/material";
import Landing from './pages/Landing.jsx';
import Micro from "./pages/MicroEmprendimientos.jsx";
import ResultOfSearch from "./pages/ResultOfSearch.jsx";
import NoEncontrado from "./pages/NoEncontrado.jsx";
import PostList from './assets/components/PostList';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<Landing />} />
            <Route path="/microEmprendimientos" element={<Micro />} />
            <Route path="/ResultOfSearch" element={<ResultOfSearch />} />
            <Route path="/NoEncontrado" element={<NoEncontrado />} />
            <Route path="/postlist" element={<PostList />} /> 
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
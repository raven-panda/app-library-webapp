import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/error/not-found-page';
import { PUBLIC_ROUTES } from './router';
import { ThemeProvider } from './hook/Theme';
import { ToastContainer } from 'react-toastify';

function App() {
  useEffect(() => {
    document.body.classList.remove("no-transition");
  }, []);

  return (
    <ThemeProvider>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {PUBLIC_ROUTES.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

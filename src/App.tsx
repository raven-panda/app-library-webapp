import {Suspense, useEffect} from 'react';
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
      <Suspense fallback={<>loading</>}>
        <BrowserRouter>
          <Routes>
            {PUBLIC_ROUTES.map(({ path, Component, Layout }) => (
              <Route key={path} path={path} element={<Layout><Component /></Layout>} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

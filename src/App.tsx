import { Suspense, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/error/not-found-page';
import { PUBLIC_ROUTES } from './router';
import { ThemeProvider } from './hook/theme';

function App() {
  const {t} = useTranslation();

  useEffect(() => {
    document.body.classList.remove("no-transition");
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<div>{t("loading")}...</div>}>
          <Routes>
            {PUBLIC_ROUTES.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

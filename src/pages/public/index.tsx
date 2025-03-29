import { Moon, Search, Sliders, Sun } from 'react-feather';
import { useTranslation } from 'react-i18next';
import Button from '@/lib/components/form/Button';
import EbrForm from '@/lib/components/form/EbrForm.tsx';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';
import EbraryIcon from '@/lib/components/icon/EbraryIcon.tsx';
import LanguageDropdown from '@/lib/components/form/LanguageDropdown.tsx';
import { useTheme } from '@/hook/Theme.tsx';

function WelcomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSubmit = (formData: Record<string, any>) => {
    const searchParams = buildSearchParams(formData);
    navigate('/browse' + searchParams);
  };

  const buildSearchParams = (formData: Record<string, any>) => {
    return (
      '?' +
      Object.entries(formData)
        .map(([k, v]) => k + '=' + encodeURIComponent(v))
        .join('&')
    );
  };

  return (
    <>
      <header className="ebr_welcome-header">
        <h1>
          <span className="font-accent-blue">E.</span>brary,{' '}
          {t('welcomePage.title')}
        </h1>
        <h2>{t('welcomePage.subTitle')}</h2>

        <Button
          id="form-advanced-search-btn"
          onClick={() => navigate('/browse')}
        >
          <Sliders /> {t('form.advancedSearch')}
        </Button>
        <EbrForm
          className="ebr_welcome-form"
          onSubmit={onSubmit}
          formBuilder={[
            {
              name: 'searchAll',
              type: 'text',
              placeholder: t('form.searchAllInput'),
              icon: <Search size={24} />,
              isIconButtonSubmit: true,
              required: true,
            },
          ]}
          submitButton={<></>}
        />
      </header>
    </>
  );
}

WelcomePage.Layout = function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useTheme();

  return (
    <div className="ebr_layout">
      <header className="ebr_header">
        <div className="ebr_header-left">
          <Button>
            <EbraryIcon />
          </Button>
        </div>
        <div className="ebr_header-right">
          <Button
            className="ebr_theme-switch"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <Moon /> : <Sun />}
          </Button>
          <LanguageDropdown />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default WelcomePage;

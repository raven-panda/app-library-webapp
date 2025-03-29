import { ReactNode, useEffect, useRef, useState } from 'react';
import EbraryIcon from '../components/icon/EbraryIcon.tsx';
import Button from '../components/form/Button.tsx';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import {
  ChevronLeft,
  Moon,
  Search,
  ShoppingCart,
  Sun,
  User,
} from 'react-feather';
import EbrForm from '../components/form/EbrForm.tsx';
import getBrowseFormBuilder from '../form/BrowseFormBuilder.tsx';
import UrlTransformer from '@/service/UrlTransformer.ts';
import LanguageDropdown from '../components/form/LanguageDropdown.tsx';
import { useTheme } from '@/hook/Theme.tsx';

export default function BrowseLayout({ children }: { children: ReactNode }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const asideRef = useRef<HTMLElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [theme, setTheme] = useTheme();
  const { formBuilder, formMatrix, globalAssertions } = getBrowseFormBuilder(t);

  useEffect(() => {
    if (!asideRef.current) return;

    asideRef.current.style.marginLeft = isSidebarOpen
      ? '0px'
      : `-${asideRef.current.clientWidth - 60}px`;
  }, [isSidebarOpen]);

  const getFilterFormOriginalData = () => {
    const entries = Object.entries(
      UrlTransformer.transformSearchBooksQuery(searchParams, false),
    );
    const record: Record<
      string,
      string | string[] | number | boolean | number[] | undefined
    > = {};

    entries.forEach(([k, v]) => (record[k] = v === null ? undefined : v));
    return record;
  };

  const getSearchAllOriginalData = () => {
    return {
      searchAll: searchParams.get('searchAll') ?? undefined,
    };
  };

  const updateSearchParams = (
    updates: Record<string, string | number | boolean | undefined>,
  ) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value !== undefined && value.toString().length > 0) {
        newParams.set(key, value.toString());
      } else {
        newParams.delete(key);
      }
    });

    return newParams;
  };

  const submitCallback = (data: Record<string, any>) => {
    if (location.pathname === '/browse') {
      setSearchParams(updateSearchParams(data));
    } else {
      navigate({
        pathname: '/browse',
        search: updateSearchParams(data).toString(),
      });
    }
  };

  return (
    <div className="ebr_layout">
      <header className="ebr_header">
        <div className="ebr_header-left">
          <Button onClick={() => navigate('/')}>
            <EbraryIcon />
          </Button>
          <EbrForm
            key={searchParams.toString()}
            onSubmit={submitCallback}
            formBuilder={[
              {
                name: 'searchAll',
                type: 'text',
                placeholder: t('form.searchAllInput'),
                icon: <Search size={'1.3rem'} />,
                iconButtonType: 'submit',
                isIconButtonSubmit: true,
                required: false,
              },
            ]}
            defaultData={getSearchAllOriginalData()}
            submitButton={<></>}
          />
        </div>
        <div className="ebr_header-right">
          <Button
            className="ebr_theme-switch"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <Moon /> : <Sun />}
          </Button>
          <LanguageDropdown />
          {/** @todo Hide ShoppingCart button when authentication will be implemented */}
          <Button>
            <ShoppingCart /> {t('layout.cart')}
          </Button>
          <Button>
            <User /> {t('layout.myAccount')}
          </Button>
        </div>
      </header>
      <section className="ebr_layout-content">
        <aside
          ref={asideRef}
          className="ebr_layout-aside"
          data-open={isSidebarOpen}
        >
          <h1 className="ebr_layout-aside-title">
            {t('layout.refineYourSearch')}
            <Button
              className="ebr_layout-aside-toggle"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
            >
              <ChevronLeft />
            </Button>
          </h1>
          <div className="ebr_layout-aside-content" inert={!isSidebarOpen}>
            <EbrForm
              key={searchParams.toString()}
              className="ebr_layout-browse-form"
              onSubmit={submitCallback}
              defaultData={getFilterFormOriginalData()}
              formBuilder={formBuilder}
              formMatrix={formMatrix}
              assertions={globalAssertions}
              submitButton={
                <Button
                  className="ebr_submit-action"
                  variant="filled"
                  size="md"
                  type="submit"
                >
                  <Search /> Rechercher
                </Button>
              }
            />
          </div>
        </aside>
        <main>{children}</main>
      </section>
    </div>
  );
}

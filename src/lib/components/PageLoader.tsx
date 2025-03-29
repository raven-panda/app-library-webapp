import { Loader } from 'react-feather';
import { useTranslation } from 'react-i18next';

export default function PageLoader() {
  const { t } = useTranslation();
  return (
    <div className="ebr_loader-cover-all">
      <p className="ebr_loader">
        <Loader size="2rem" className="ebr_loader-spinner" />
        <span>{t('loading')}</span>
      </p>
    </div>
  );
}

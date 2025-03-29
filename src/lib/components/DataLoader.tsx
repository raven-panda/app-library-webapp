import { useTranslation } from 'react-i18next';
import { Loader } from 'react-feather';
import { ReactNode } from 'react';

export default function DataLoader({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: ReactNode;
}) {
  const { t } = useTranslation();
  return isLoading ? (
    <p className="ebr_loader">
      <Loader className="ebr_loader-spinner" />
      <span>{t('loading')}</span>
    </p>
  ) : (
    children
  );
}

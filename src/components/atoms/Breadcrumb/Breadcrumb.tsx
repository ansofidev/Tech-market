import { Link } from 'react-router-dom';
import { useBreadcrumb } from './useBreadcrumb';
import { Home, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Breadcrumb = ({ productName }: { productName?: string }) => {
  const breadcrumbItems = useBreadcrumb(productName);
  const { t } = useTranslation();

  if (breadcrumbItems.length === 0) return null;

  return (
    <nav
      id="breadcrumb-nav"
      className="grid grid-cols-1 pt-6 px-4
        min-[640px]:px-8
        min-[1200px]:px-0
        min-[1200px]:max-w-[1136px] mx-auto
        text-sm"
      aria-label={t('breadcrumb.label')}
    >
      <ol className="flex flex-wrap items-center gap-2" id="breadcrumb-list">
        <li className="flex items-center gap-2" id="breadcrumb-home">
          <Link to="/" className="transition-colors" id="breadcrumb-home-link">
            <Home className="w-4 h-4" />
          </Link>
          {breadcrumbItems.length > 0 && (
            <span id="breadcrumb-home-separator">
              <ChevronRight className="w-4 h-4" />
            </span>
          )}
        </li>

        {breadcrumbItems.map((crumb, index) => (
          <li
            key={index}
            className="flex items-center gap-2 capitalize"
            id={`breadcrumb-item-${index}`}
          >
            {!crumb.isLast ? (
              <Link
                to={crumb.path}
                className="transition-colors"
                id={`breadcrumb-link-${index}`}
              >
                {crumb.name}
              </Link>
            ) : (
              <span id={`breadcrumb-current-${index}`}>{crumb.name}</span>
            )}
            {!crumb.isLast && (
              <span id={`breadcrumb-separator-${index}`}>
                <ChevronRight className="w-4 h-4" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

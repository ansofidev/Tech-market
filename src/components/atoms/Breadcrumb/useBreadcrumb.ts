import { selectProductCategory } from '@/features/productsSlice';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const useBreadcrumb = (productNameFromProps?: string) => {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);
  const category = useSelector(selectProductCategory);
  const { t } = useTranslation();

  const formatSegment = (segment: string) => {
    const key = `breadcrumb.${segment}`;
    const translated = t(key);
    if (translated !== key) return translated;
    return segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  };

  if (segments.length === 0) {
    return [];
  }

  let breadcrumbItems = segments.map((segment, index) => ({
    name: formatSegment(segment),
    path: '/' + segments.slice(0, index + 1).join('/'),
    isLast: index === segments.length - 1,
  }));

  if (segments[0] === 'product') {
    breadcrumbItems = [
      {
        name: formatSegment(category),
        path: `/${category}`,
        isLast: false,
      },
      {
        name: productNameFromProps || ' ',
        path: location.pathname,
        isLast: true,
      },
    ];
  }

  return breadcrumbItems;
};

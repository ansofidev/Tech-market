import { Link } from 'react-router-dom';
import Button from '@/components/atoms/button/Button';
import { ButtonTypes } from '../../../types/ButtonTypes';
import { ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  const footerItems = [
    {
      name: t('footer.gitub'),
      link: 'https://github.com/fs-jan25-team1/Tech-market',
    },
    { name: t('footer.contacts'), link: '/contact' },
    { name: t('footer.rights'), link: '/rights' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-[#0f1121] border-t border-[#3b3e4a] font-['Mont'] text-[12px] leading-[11px]">
      <div
        className="
          grid grid-cols-4 gap-x-4 gap-y-8 py-8 px-4
          min-[640px]:grid-cols-12 min-[640px]:px-8 
          min-[1200px]:grid-cols-24 min-[1200px]:mx-auto min-[1200px]:px-0 min-[1200px]:max-w-[1136px]"
      >
        <div className="col-span-4 min-[640px]:col-span-3 self-center">
          <Link to="/" className="block w-[89px] h-[32px]">
            <img src="/logo/Logo.svg" alt="Nice Gadgets" />
          </Link>
        </div>

        <div
          className="
            col-span-4 flex flex-col gap-4 
            min-[640px]:col-start-4 min-[640px]:col-span-6 
            min-[640px]:flex-row min-[640px]:justify-center 
            min-[640px]:self-center 
            min-[1200px]:col-start-9 min-[1200px]:col-span-8 
            min-[1200px]:gap-[107px]"
        >
          {footerItems.map((item) =>
            item.link.startsWith('http') ? (
              <a
                className="text-white hover:underline transition"
                href={item.link}
                key={item.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ) : (
              <Link
                className="text-white hover:underline transition"
                to={item.link}
                key={item.name}
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        <div
          className="col-span-4 flex items-center justify-center gap-4 cursor-pointer 
              min-[640px]:col-start-10 min-[640px]:col-span-3 min-[640px]:justify-end min-[640px]:self-center
              min-[1200px]:col-start-22 min-[1200px]:col-span-3 min-[1200px]:justify-end"
          onClick={scrollToTop}
        >
          <span className="text-white">{t('footer.backToTop')}</span>
          <Button variant={ButtonTypes.arrow} className="" icon={ChevronUp} />
        </div>
      </div>
    </footer>
  );
};

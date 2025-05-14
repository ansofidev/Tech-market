import { useEffect, useRef, useState } from 'react';
import i18n from '@/i18n';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const currentLang = i18n.language;
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
    setOpen(false);
  };

  const flags: Record<string, string> = {
    en: '🇬🇧',
    uk: '🇺🇦',
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center h-full w-[48px] cursor-pointer group"
        aria-label="Change Language"
      >
        <Globe
          id="lang"
          className="w-5 h-5 text-[#75767F] group-hover:text-[#F1F2F9] transition-colors"
        />
      </button>

      {open && (
        <div
          className="absolute right-0 w-28 bg-black border border-[#3B3E4A] rounded-md shadow-lg z-50
                  mt-[-8px] bottom-full mb-2
                  sm:mt-2 sm:bottom-auto sm:top-full sm:mb-0"
        >
          {Object.entries(flags).map(([lang, flag]) => (
            <button
              key={lang}
              onClick={() => changeLang(lang)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-[#1F1F1F] ${
                currentLang === lang ? 'text-white' : 'text-[#75767F]'
              }`}
            >
              {flag} {lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import { User } from 'firebase/auth';
import { UserAvatar } from '@/components/molecules/UserAvatar/UserAvatar';
import { useTranslation } from 'react-i18next';

type UserDropdownProps = {
  user: User;
  onLogout: () => void;
};

export const UserDropdown: React.FC<UserDropdownProps> = ({
  user,
  onLogout,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

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
        className="w-10 h-10 flex items-center justify-center transition-transform cursor-pointer"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <UserAvatar user={user} />
        </div>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-52 bg-[#905BFF] text-white rounded-xl shadow-xl z-50">
          <div className="px-4 py-3 border-b border-[#a885ff]">
            <p className="font-semibold cursor-pointer">{user.displayName}</p>
            <p className="text-sm text-[#E3DFFF] truncate cursor-pointer">
              {user.email}
            </p>
          </div>
          <button
            onClick={() => {
              onLogout();
              setOpen(false);
            }}
            className="block w-full px-4 py-2 text-sm text-left bg-transparent text-white rounded-b-xl cursor-pointer"
          >
            {t('userMenu.button.logOut')}
          </button>
        </div>
      )}
    </div>
  );
};

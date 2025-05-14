import React from 'react';
import { User } from 'firebase/auth';

type UserAvatarProps = {
  user: User;
  size?: number;
};

export const UserAvatar: React.FC<UserAvatarProps> = ({ user, size = 32 }) => {
  const sizeClass = {
    width: `${size}px`,
    height: `${size}px`,
  };

  const initials =
    user.displayName
      ?.split(' ')
      .map((name) => name[0])
      .join('')
      .toUpperCase() || 'U';

  if (user.photoURL) {
    return (
      <img
        src={user.photoURL}
        alt="Avatar"
        style={sizeClass}
        className="rounded-full object-cover"
      />
    );
  }

  return (
    <div
      style={sizeClass}
      className="flex items-center justify-center rounded-full bg-gray-700 text-white font-semibold text-sm"
    >
      {initials}
    </div>
  );
};

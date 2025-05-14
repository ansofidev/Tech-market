import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/shared/firebase';
import { useTranslation } from 'react-i18next';

interface SignInFormProps {
  onClose: () => void;
}

export const SignInForm = ({ onClose }: SignInFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const { t } = useTranslation();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(null);
      onClose();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(t('signInForm.error.unknown'));
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto p-6 bg-[#1f1f1f] rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-white text-center">
        {t('signInForm.label.signIn')}
      </h2>
      <form onSubmit={handleSignIn} className="flex flex-col gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('signInForm.placeholder.email')}
          className="p-3 rounded-lg bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t('signInForm.placeholder.password')}
          className="p-3 rounded-lg bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
          required
        />
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button
          type="submit"
          className="p-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-all"
        >
          {t('signInForm.button.signIn')}
        </button>
      </form>
    </div>
  );
};

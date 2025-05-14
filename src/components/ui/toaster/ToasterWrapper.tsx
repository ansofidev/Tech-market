import { Toaster } from 'react-hot-toast';

export const ToasterWrapper = () => (
  <Toaster
    position="top-center"
    toastOptions={{
      duration: 2000,
      style: {
        background: '#1F1F2E',
        color: '#fff',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '14px',
        borderRadius: '8px',
      },
    }}
  />
);

import Header from '@/components/organisms/Header/Header';
import { Outlet } from 'react-router';
import { Footer } from './components/organisms/Footer/Footer';
import { ToasterWrapper } from './components/ui/toaster';
import { Breadcrumb } from './components/atoms/Breadcrumb/Breadcrumb';
import { useAuthUser } from './hooks/useAuthUser';
import { useAppSelector } from './store/store';
import { selectProductName } from './features/productDetailsSlice';
import { WelcomeDiscountModal } from './components/molecules/Modal/WelcomeModal';

export const App = () => {
  useAuthUser();
  const productName = useAppSelector(selectProductName);

  return (
    <>
      <WelcomeDiscountModal />
      <Header />
      <ToasterWrapper />
      <Breadcrumb productName={productName} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

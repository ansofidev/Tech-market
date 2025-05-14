import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './modules/HomePage';
import { PhonesPage } from './modules/PhonesPage';
import { TabletsPage } from './modules/TabletsPage/TabletsPage.tsx/TabletsPage';
import { AccessoriesPage } from './modules/AccessoriesPage/AccessoriesPage';
import { CartPage } from './modules/CartPage/CartPage';
import { ItemCard as ItemCardTemplate } from './components/templates/ItemCardTemplate/ItemCardTemplate';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { FavoritesPage } from './modules/FavoritesPage/FavoritesPage';
import { CheckoutPage } from './modules/CheckoutPage';
import ContactPage from './modules/ContactPage/ContactPage';
import RightsPage from './modules/RightsPage/RightsPage';

export const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="phones" element={<PhonesPage />} />
          <Route path="tablets" element={<TabletsPage />} />
          <Route path="accessories" element={<AccessoriesPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="product/:productId" element={<ItemCardTemplate />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="rights" element={<RightsPage />} />
        </Route>
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
};

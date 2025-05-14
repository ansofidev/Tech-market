import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import './index.css'; // for tailwind
import './styles/index.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Router>
          <AppRouter />
        </Router>
      </I18nextProvider>
    </Provider>
  </StrictMode>,
);

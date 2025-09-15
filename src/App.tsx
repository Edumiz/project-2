import RenderRouter from '@/routes';
import { AppProvider } from '@shopify/polaris';
import { useMemo } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { config } from './config';
import enTranslations from '@shopify/polaris/locales/en.json';
import './App.css';
import { NavMenu } from '@shopify/app-bridge-react';
import { PATH } from './constants/path';

const navigationLinks: Array<{
  label: string;
  pathname: string;
  url: {
    pathname: string;
    search: string;
  };
}> = [];

function App() {
  // console.log(import.meta.env.VITE_API_KEY);

  const location = useLocation();
  const navigate = useNavigate();
  const history = useMemo(() => ({ replace: (path: string) => navigate(path, { replace: true }) }), [navigate]);
  const configApp = {
    apiKey: import.meta.env.VITE_API_KEY || '',
    host: new URLSearchParams(location.search).get('host') || '',
    forceRedirect: import.meta.env.VITE_MODE === 'live',
  };

  const router = useMemo(
    () => ({
      location,
      history,
    }),
    [location, history],
  );

  return (
    <AppProvider i18n={enTranslations}>
      {config.embedded === '1' ? (
        <>
          <NavMenu>
            <NavLink to={PATH.DEFAULT.pathname} rel="home">
              Home
            </NavLink>
            {navigationLinks.map((item) => {
              return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <NavLink
                  id={item.pathname}
                  key={item.pathname}
                  to={item.pathname}
                  onClick={() => {
                    navigate(item.url);
                  }}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </NavMenu>

          <RenderRouter />
        </>
      ) : (
        <RenderRouter />
      )}
      
    </AppProvider>
  );
}

export default App;

import { config } from '@/config';
import { PATH } from '@/constants/path';
// import { dataSettingsSelector } from '@/redux/slice/dataSettings.slice';
import { Button, ButtonGroup, Frame, Link, Page, PageProps } from '@shopify/polaris';
import { HomeIcon } from '@shopify/polaris-icons';
import { memo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RegularText from '../RegularText';
import SkeletonPage from '../SkeletonPage';
import Toast from '../Toast/Toast';
import { LayoutStyled } from './styled';

const btnGroup = [
  {
    content: 'Home',
    icon: HomeIcon,
    path: PATH.DEFAULT,
  },
];

interface ILayoutProps extends PageProps {
  headers?: React.ReactNode;
}

const Layout = ({ ...props }: ILayoutProps): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  // const isLoading = useSelector(generalSettingsLoadingSelector);
  const isLoading = false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <LayoutStyled>
      <Frame>
        <Toast />
        {config.embedded !== '1' ? (
          <div className="nav-bar">
            <ButtonGroup fullWidth gap="extraTight">
              {btnGroup.map((item, index) => {
                return (
                  <Button
                    key={index}
                    icon={item.icon}
                    variant={
                      location.pathname === item.path.pathname || (index === 0 && location.pathname === '/')
                        ? 'primary'
                        : undefined
                    }
                    onClick={() => {
                      navigate({
                        ...item.path,
                      });
                    }}
                  >
                    {item.content}
                  </Button>
                );
              })}
            </ButtonGroup>
          </div>
        ) : null}
        {props.headers || null}
        <Page {...props}>
          {isLoading ? (
            <SkeletonPage />
          ) : (
            <div>
              <div>{props.children}</div>
              <RegularText>
                <div className="layout-footer">
                  Need help? Please view&nbsp;{' '}
                  <Link
                    removeUnderline
                    external
                    url="https://omegatheme-contact.gitbook.io/omega-estimated-delivery-date-new-version"
                  >
                    our document guideline
                  </Link>
                </div>
              </RegularText>
            </div>
          )}
        </Page>
      </Frame>
    </LayoutStyled>
  );
};
export default memo(Layout);

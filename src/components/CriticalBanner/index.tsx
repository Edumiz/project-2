import { Banner, Button, Card, Collapsible } from '@shopify/polaris';
import { memo } from 'react';
import RegularText from '../RegularText';
import { openCrisp } from '@/helpers';
import { CriticalBannerStyled } from './styled';

interface IProps {
  title?: string;
  isVisible: boolean;
  children: React.ReactNode;
  maxHeight?: number;
  isNotInCard?: boolean;
}

const CriticalBanner = ({ ...props }: IProps) => {
  return (
    <CriticalBannerStyled
      style={{
        marginBottom: props.isVisible ? 16 : 0,
      }}
    >
      <Collapsible open={props.isVisible} id="basic-collapsible" transition={{ duration: '500ms' }} expandOnPrint>
        {props.isNotInCard ? (
          <Card>
            <Banner title={props.title} tone="critical">
              <RegularText>{props.children}</RegularText>
              <div className="mt-8">
                <Button onClick={openCrisp}>Contact support</Button>
              </div>
            </Banner>
          </Card>
        ) : (
          <Banner title={props.title} tone="critical">
            <RegularText>{props.children}</RegularText>
            <div className="mt-8">
              <Button onClick={openCrisp}>Contact support</Button>
            </div>
          </Banner>
        )}
      </Collapsible>
    </CriticalBannerStyled>
  );
};

export default memo(CriticalBanner);

import { openCrisp } from '@/helpers';
import { Banner, Button, Card, Collapsible } from '@shopify/polaris';
import { memo } from 'react';
import RegularText from '../RegularText';

interface IProps {
  title?: string;
  isVisible: boolean;
  children: React.ReactNode;
  isNotInCard?: boolean;
}

const WarningBanner = ({ ...props }: IProps) => {
  return (
    <div
      style={{
        marginBottom: props.isVisible ? 16 : 0,
      }}
    >
      <Collapsible open={props.isVisible} id="basic-collapsible" transition={{ duration: '500ms' }} expandOnPrint>
        {props.isNotInCard ? (
          <Card>
            <Banner title={props.title} tone="warning">
              <RegularText>{props.children}</RegularText>
              <div className="mt-8">
                <Button onClick={openCrisp}>Contact support</Button>
              </div>
            </Banner>
          </Card>
        ) : (
          <Banner title={props.title} tone="warning">
            <RegularText>{props.children}</RegularText>
            <div className="mt-8">
              <Button onClick={openCrisp}>Contact support</Button>
            </div>
          </Banner>
        )}
      </Collapsible>
    </div>
  );
};

export default memo(WarningBanner);

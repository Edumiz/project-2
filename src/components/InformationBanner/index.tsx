import { Banner, Collapsible } from '@shopify/polaris';
import { memo } from 'react';
import RegularText from '../RegularText';

interface Props {
  title?: string;
  isVisible: boolean;
  onDismiss?: () => void;
  children: React.ReactNode;
  maxHeight?: number;
}

const InformationBanner = ({ ...props }: Props) => {
  return (
    <div
      style={{
        marginBottom: props.isVisible ? 8 : 0,
      }}
    >
      <Collapsible open={props.isVisible} id="basic-collapsible" transition={{ duration: '500ms' }} expandOnPrint>
        <Banner title={props.title} onDismiss={props.onDismiss}>
          <RegularText>{props.children}</RegularText>
        </Banner>
      </Collapsible>
    </div>
  );
};

export default memo(InformationBanner);

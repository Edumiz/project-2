import { Text } from '@shopify/polaris';
import { memo } from 'react';
type IAlignment = 'start' | 'center' | 'end' | 'justify';

const RegularText = ({ children, alignment }: { children: React.ReactNode; alignment?: IAlignment }) => {
  return (
    <Text as="span" variant="bodySm" alignment={alignment}>
      {children}
    </Text>
  );
};
export default memo(RegularText);

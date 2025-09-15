import { Text } from '@shopify/polaris';
import { memo } from 'react';
type IAlignment = 'start' | 'center' | 'end' | 'justify';

const BoldText = ({ children, alignment }: { children: React.ReactNode; alignment?: IAlignment }) => {
  return (
    <Text as="h6" variant="headingMd" alignment={alignment}>
      {children}
    </Text>
  );
};
export default memo(BoldText);

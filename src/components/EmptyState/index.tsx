import { EmptyState } from '@shopify/polaris';
import { memo } from 'react';
import RegularText from '../RegularText';

interface Props {
  heading: string;
  description?: string | React.ReactNode;
}

const CustomEmptyState = ({ ...props }: Props) => {
  return (
    <EmptyState
      heading={props.heading}
      // action={{
      //   content: props.actionContent,
      //   onAction: props.onAction,
      // }}
      image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
    >
      <RegularText>{props.description}</RegularText>
    </EmptyState>
  );
};

export default memo(CustomEmptyState);

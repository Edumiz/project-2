import { Button, ButtonProps, Card } from '@shopify/polaris';
import { ReactElement, memo } from 'react';
import BoldText from '../BoldText';
import { CardStyled } from './styled';

interface Props {
  hasDroplist?: boolean;
  title?: string | ReactElement;
  secondaryActions?: {
    content?: any;
    buttonProps: ButtonProps;
    onAction?: () => void;
  };
  children?: any;
  display?: string;
  disableCardBorder?: boolean;
}

const CustomCard = ({ ...props }: Props) => {
  return (
    <CardStyled hasDroplist={props.hasDroplist} style={{ display: props.display || 'block' }}>
      {!props.disableCardBorder ? (
        <Card padding={'400'}>
          <div className="custom-card-header">
            {props.title ? (
              <BoldText>{props.title}</BoldText>
            ) : (
              <div className="custom-card-btn">
                {props.secondaryActions && (
                  <Button onClick={props.secondaryActions.onAction} {...props.secondaryActions.buttonProps}>
                    {props.secondaryActions?.content}
                  </Button>
                )}
              </div>
            )}
          </div>
          <div className="custom-card-content mt-8">{props.children}</div>
        </Card>
      ) : (
        <>
          <div className="custom-card-header">
            <BoldText>{props.title}</BoldText>
          </div>
          <div className="custom-card-content mt-8">{props.children}</div>
        </>
      )}
    </CardStyled>
  );
};

export default memo(CustomCard);

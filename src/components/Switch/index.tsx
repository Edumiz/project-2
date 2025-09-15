import { Tooltip } from '@shopify/polaris';
import { memo } from 'react';
import { SwitchStyled } from './styled';

interface Props {
  isActive: boolean;
  onSwitch: (checked: boolean) => void;
  isLoading?: boolean;
}

const Switch = ({ isLoading, ...props }: Props) => {
  return (
    <SwitchStyled>
      <Tooltip content={props.isActive ? 'Turn on' : 'Turn off'}>
        {
          <div
            className={`rule-toggle ${props.isActive && 'active'} ${isLoading ? 'disable' : ''}`}
            onClick={() => props.onSwitch(!props.isActive)}
          />
        }
      </Tooltip>
    </SwitchStyled>
  );
};

export default memo(Switch);

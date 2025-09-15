import { useState } from 'react';
import { CollapsibleStyled } from './styled';
import BoldText from '../BoldText';
import { ChevronDownIcon, ChevronUpIcon } from '@shopify/polaris-icons';
import { Icon, Collapsible as CollapsiblePolaris, Card } from '@shopify/polaris';
import { ICollapsible } from '@/types';

export const Collapsible = ({ defaultOpen = true, ...props }: ICollapsible) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <CollapsibleStyled>
      <Card>
        <div className="title-container" onClick={() => setOpen(!open)}>
          <BoldText>{props.title}</BoldText>
          <Icon source={open ? ChevronDownIcon : ChevronUpIcon} tone="base" />
        </div>
        <CollapsiblePolaris
          open={open}
          id="basic-collapsible"
          transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
          expandOnPrint
        >
          {props.children}
        </CollapsiblePolaris>
      </Card>
    </CollapsibleStyled>
  );
};

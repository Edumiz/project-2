import { Badge, Button, Card, InlineGrid, SkeletonBodyText, SkeletonDisplayText } from '@shopify/polaris';
import { memo } from 'react';
import { CustomSettingToggleStyled } from './styled';
// import { loadingSelector } from '@/redux/slice/masterData.slice';
import RegularText from '../RegularText';
import { ISettingToggle } from '@/types';
import BoldText from '../BoldText';

const CustomSettingToggle = ({ ...props }: ISettingToggle) => {
  return (
    <CustomSettingToggleStyled>
      <Card>
        <InlineGrid columns={['twoThirds', 'oneThird']}>
          <div>
            <div className="toggle-settings-title">
              <BoldText>{props.title}</BoldText>
              <div className="ml-4">
                {props.settingToggleProps.action?.loading ? (
                  <SkeletonBodyText lines={1} />
                ) : (
                  <Badge tone={props.settingToggleProps.enabled ? 'success' : 'critical'}>
                    {props.settingToggleProps.enabled ? 'On' : 'Off'}
                  </Badge>
                )}
              </div>
            </div>
            {props.children ? (
              <div className="mt-8">
                <RegularText>{props.children}</RegularText>
              </div>
            ) : null}
          </div>
          <div className="toggle-btn">
            {props.settingToggleProps.action?.loading ? (
              <SkeletonDisplayText size="small" />
            ) : (
              <Button
                disabled={props.disableStatus}
                onClick={props.settingToggleProps.action?.onAction}
                loading={props.settingToggleProps.action?.loading}
                variant={props.settingToggleProps.enabled ? undefined : 'primary'}
              >
                {props.settingToggleProps.enabled ? 'Turn off' : 'Turn on'}
              </Button>
            )}
          </div>
        </InlineGrid>
      </Card>
    </CustomSettingToggleStyled>
  );
};

export default memo(CustomSettingToggle);

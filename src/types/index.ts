import { SettingToggleProps } from '@shopify/polaris';

export namespace IAutoComplete {
  export interface IProps {
    options: Array<{
      label: string;
      value: string;
      disabled?: boolean;
    }>;
    tag: Array<{
      label: string;
      value: string;
    }>;
    label: string;
    selectedOptions: Array<string>;
    setSelectedOptions: (value: IOptions[]) => void;
    allowMultiple: boolean;
    requiredIndicator?: boolean;
    placeholder?: string;
    disable?: boolean;
    helpText?: React.ReactNode;
    handleSearch?: (value: string) => void;
  }

  export interface IPropsAllowAdd extends IProps {
    allowAdd: boolean;
    setOptions: (options: Array<{ label: string; value: string }>) => void;
  }

  export interface Section {
    title: string;
    options: {
      value: string;
      label: string;
    }[];
  }

  export interface IPropsSearch extends Omit<IProps, 'options' | 'tag' | 'setSelectedOptions'> {
    deselectedOptions: Section[];
    suffix?: any;
    clearButton?: boolean;
    setSelectedOptions: (selected: string[]) => void;
    initialInput: string;
  }
}

export interface ISettingToggle {
  disableStatus?: boolean;
  settingToggleProps: SettingToggleProps;
  title: string;
  children?: JSX.Element | string;
}

export interface ICollapsible {
  title: string;
  children?: any;
  defaultOpen?: boolean;
}

export interface IOptions {
  value: string;
  label: string;
}

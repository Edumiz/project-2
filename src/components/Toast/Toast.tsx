import toastSlice, { toastSelector } from '@/redux/slice/toast.slice';
import { Toast } from '@shopify/polaris';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CustomToast = (): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useSelector(toastSelector);

  return toast.isOpen ? (
    toast.hasAction ? (
      <Toast
        content={toast.content}
        error={toast.error}
        onDismiss={() => {
          dispatch(
            toastSlice.actions.handleToast({
              content: '',
              isOpen: false,
              error: false,
            }),
          );
        }}
      />
    ) : (
      <Toast
        content={toast.content}
        error={toast.error}
        duration={1500}
        onDismiss={() => {
          dispatch(
            toastSlice.actions.handleToast({
              content: '',
              isOpen: false,
              error: false,
            }),
          );
        }}
      />
    )
  ) : (
    <></>
  );
};

export default memo(CustomToast);

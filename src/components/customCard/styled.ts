import styled from 'styled-components';
interface IProps {
  hasDroplist?: boolean;
}

export const CardStyled = styled.div<IProps>`
  width: 100%;
  ${(props) =>
    props.hasDroplist
      ? `.Polaris-ShadowBevel , .Polaris-Box {
    overflow : visible !important
  }`
      : ''}
  .custom-card-header {
    display: flex;
    justify-content: space-between;
    .custom-card-title {
      display: flex;
      align-items: center;
    }
    .custom-card-btn {
      display: flex;
      align-items: center;
    }
    .custom-secondary-btn {
      .Polaris-Button--iconOnly {
        height: 28px;
        margin-top: 8px;
      }
    }
  }
`;

import { config } from '@/config';
import styled from 'styled-components';
export const LayoutStyled = styled.div`
  max-width: 1902px;
  .Polaris-Page {
    width: 100%;
  }
  .Polaris-Page__Content {
    min-height: calc(100vh - 1.75rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .Polaris-Frame__Content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .Polaris-Page {
      .Polaris-Page--divider {
        min-height: calc(100vh - 112px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
    .Polaris-Page > .Polaris-Box {
      position: sticky !important;
      top: ${() => (config.role === 'admin' ? '28px' : 0)};
      z-index: 102;
      background-color: #f1f1f1;
      padding: 20px 0px;
    }
    .Polaris-Page > .Polaris-Box ~ .Polaris-Box {
      position: relative;
    }
  }
  .nav-bar {
    position: sticky;
    top: 0;
    z-index: 10;
    width: calc(100vw - 20px);
  }
  .layout-footer {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }
  .btn-export {
    .Polaris-Button svg {
      fill: #fff;
    }
  }
  @media only screen and (max-width: 1040px) {
    .Polaris-Page {
      min-width: 0;
      max-width: calc(100vw - 72px);
    }
  }
`;

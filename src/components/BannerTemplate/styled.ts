import { BREAKPOINT } from '@/constants/enum';
import styled from 'styled-components';

export const BannerTemplateStyled = styled.div`
  position: relative;
  .btn-cancel {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 511;
  }
  .banner-template-left {
    display: flex;
    align-items: center;
  }
  .banner-img {
    width: 317px;
    height: 183px;
  }
  .banner-template-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .pd-16 {
    padding: 1rem;
  }
  @media screen and (max-width: ${BREAKPOINT.MD}px) {
    .banner-img {
      width: 100%;
      height: auto;
    }
  }
`;

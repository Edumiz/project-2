import { colors } from '@/constants/colors';
import styled from 'styled-components';

export const SwitchStyled = styled.div`
  .rule-toggle {
    cursor: pointer;
    display: inline-block;
    position: relative;
    width: 32px;
    height: 18px;
    border-radius: 1rem;
    border: 1px solid #ddd;
    background: #ddd;
    &:after {
      content: '';
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      position: absolute;
      left: 1px;
      top: 1px;
      transition: 0.3s;
      background: #fff;
    }
    &.active {
      background: ${colors.primary};
      &:after {
        left: calc(100% - 15px);
      }
    }
  }
`;

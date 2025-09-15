import { BREAKPOINT } from '@/constants/enum';
import { Card, InlineGrid } from '@shopify/polaris';
import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BannerTemplateStyled } from './styled';
interface Props {
  src: string;
  children: React.ReactNode;
}
const BannerTemplate = ({ src, children }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: BREAKPOINT.SM });

  return (
    <BannerTemplateStyled>
      <Card padding={'0'}>
        <InlineGrid columns={isMobile ? 1 : ['oneThird', 'twoThirds']}>
          <div className="banner-template-left">
            <img className="banner-img" src={src} alt="_blank" rel={'preload'} />
          </div>
          <div className={`banner-template-right ${isMobile ? 'pd-16' : 'pl-16 pd-16'}`}>{children}</div>
        </InlineGrid>
      </Card>
    </BannerTemplateStyled>
  );
};

export default memo(BannerTemplate);

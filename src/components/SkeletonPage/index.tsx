import { SkeletonPage, Layout, Card, SkeletonBodyText, SkeletonDisplayText } from '@shopify/polaris';
import React, { memo } from 'react';

function BaseSkeletonPage() {
  return (
    <SkeletonPage primaryAction>
      <Layout>
        <Layout.Section>
          <Card>
            <SkeletonBodyText />
          </Card>
          <div className="mt-16">
            <Card>
              <SkeletonDisplayText size="small" />
              <div className="mt-8">
                <SkeletonBodyText />
              </div>
            </Card>
          </div>
          <div className="mt-16">
            <Card>
              <SkeletonDisplayText size="small" />
              <div className="mt-8">
                <SkeletonBodyText />
              </div>
            </Card>
          </div>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card>
            <SkeletonDisplayText size="small" />
            <div className="mt-8">
              <SkeletonBodyText lines={2} />
            </div>
            <div className="mt-8">
              <SkeletonBodyText lines={1} />
            </div>
          </Card>
          <Card>
            <SkeletonDisplayText size="small" />
            <div className="mt-8">
              <SkeletonBodyText lines={2} />
            </div>
            <div className="mt-8">
              <SkeletonBodyText lines={2} />
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );
}

export default memo(BaseSkeletonPage);

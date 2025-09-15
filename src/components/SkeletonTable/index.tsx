import { ColumnContentType, DataTable, SkeletonBodyText } from '@shopify/polaris';
import { memo } from 'react';

interface Props {
  column: ColumnContentType[];
  headings: React.ReactNode[];
}

function BaseSkeletonTable({ column, headings }: Props) {
  const rows = [
    [<SkeletonBodyText lines={1} key={'skeleton-table-1'} />],
    [<SkeletonBodyText lines={1} key={'skeleton-table-2'} />],
    [<SkeletonBodyText lines={1} key={'skeleton-table-3'} />],
    [<SkeletonBodyText lines={1} key={'skeleton-table-4'} />],
    [<SkeletonBodyText lines={1} key={'skeleton-table-5'} />],
  ];
  return (
    <DataTable
      columnContentTypes={column}
      headings={headings}
      rows={rows}
      footerContent={<SkeletonBodyText lines={1} />}
      verticalAlign="middle"
    />
  );
}

export default memo(BaseSkeletonTable);

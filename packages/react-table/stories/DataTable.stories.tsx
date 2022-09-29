import { DataTable } from '../src';
import { MockMembers, MockReactTableColumns } from '../src/data/mocks';
import React, { useMemo } from 'react';

export default {
  title: 'components/DataTable',
  component: DataTable,
};

export const TextTable = () => {
  const columns = useMemo(() => MockReactTableColumns, []);

  return (
    <DataTable columns={columns} data={MockMembers} sort={['name', 'asc']} />
  );
};

export const EmptyTable = () => {
  const columns = useMemo(() => MockReactTableColumns, []);

  return <DataTable columns={columns} data={[]} sort={['name', 'asc']} />;
};

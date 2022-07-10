import React, { FC, useMemo } from 'react';
import {
  useTable,
  usePagination,
  useResizeColumns,
  Column,
  useFlexLayout,
} from 'react-table';
import classNames from 'classnames';
import '../../tailwind.css';

const DefaultCell = ({ value }: { value: string | number }) => (
  <div>{value || '----'}</div>
);

type Sort = [string, 'asc' | 'desc'];

type Props = {
  columns: Column<Record<string, unknown>>[];
  data: Record<string, unknown>[];
  sort?: Sort;
  onSortChange?: (value: Sort) => void;
};

export const DataTable: FC<Props> = ({ columns, data, sort, onSortChange }) => {
  const defaultColumn = useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 150, // width is used for both the flex-basis and flex-grow

      Cell: DefaultCell,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFlexLayout,
    usePagination,
    useResizeColumns
  );

  const handleSortChange = (columnId: string) => {
    if (!onSortChange) {
      return;
    }

    if (sort?.[0] === columnId) {
      if (sort?.[1] === 'asc') {
        onSortChange([columnId, 'desc']);
      } else {
        onSortChange([columnId, 'asc']);
      }
    } else {
      onSortChange([columnId, 'asc']);
    }
  };
  // Render the UI for your table
  return (
    <div className="overflow-x-auto">
      {/* Table */}
      <div className="align-middle inline-block min-w-full ">
        <div className="pt-px overflow-hidden ">
          <div {...getTableProps()} className="min-w-full">
            <div className="border-b">
              {headerGroups.map(headerGroup => (
                <div
                  {...headerGroup.getHeaderGroupProps()}
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map(column => (
                    <div
                      {...column.getHeaderProps()}
                      onClick={() => handleSortChange(column.id)}
                      key={column.id}
                    >
                      <div className="flex w-full px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider hover:bg-gray-100">
                        <span>{column.render('Header')}</span>
                        {column.id === sort?.[0] && (
                          <span className="ml-2">
                            {sort?.[1] === 'asc' ? '▲' : '▼'}
                          </span>
                        )}
                      </div>
                      {/* Use column.getResizerProps to hook up the events correctly */}
                      <div
                        // @ts-ignore TODO:
                        {...column.getResizerProps()}
                        className={classNames({
                          ' inline-block hover:bg-red-400 w-0.5 h-full absolute right-0 top-0 z-10': true,
                          // @ts-ignore TODO:
                          '  shadow ': column.isResizing,
                        })}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div {...getTableBodyProps()} className=" ">
              {rows.map(row => {
                prepareRow(row);
                return (
                  <div
                    {...row.getRowProps()}
                    key={row.id}
                    role="row"
                    className="border-b hover:bg-gray-100"
                  >
                    {row.cells.map((cell, index) => (
                      <div
                        {...cell.getCellProps()}
                        key={index}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate "
                      >
                        {cell.render('Cell')}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

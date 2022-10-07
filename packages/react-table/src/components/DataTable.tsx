import React, { useMemo } from 'react';
import {
  Column,
  useFlexLayout,
  usePagination,
  useResizeColumns,
  useTable,
} from 'react-table';

import classNames from 'classnames';

type Sort = [string, 'asc' | 'desc'];

const DefaultCell = ({ value }: { value: string | number }) => (
  <div>{value ?? '----'}</div>
);

const DefaultEmpty = () => (
  <div className="w-full min-h-[200px] flex justify-center items-center text-gray-500">
    Empty
  </div>
);

type Props<T> = {
  columns: (Column<Record<string, T>> & {
    className?: string,
    headerClassName?: string,
    cellClassName?: string
  })[];
  data: T[];
  sort?: Sort;
  onSortChange?: (value: Sort) => void;
  bodyClassName?: string;
  Empty?: React.FC;
};

const DataTable = <T extends Record<string, any>>({
  columns,
  data,
  sort,
  onSortChange,
  bodyClassName,
  Empty,
}: Props<T>) => {
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
      <div className="border rounded align-middle min-w-full ">
        <div className="pt-px overflow-hidden ">
          <div {...getTableProps()} className="min-w-full">
            <div className="border-b border-gray-200 bg-slate-50">
              {headerGroups.map((headerGroup, index) => (
                <div
                  {...headerGroup.getHeaderGroupProps()}
                  key={`${index + 1}-${headerGroup.id}`}
                >
                  {headerGroup.headers.map(column => (
                    <div
                      {...column.getHeaderProps({
                        className: classNames(
                          (
                            column as unknown as { className?: string }
                          )?.className,
                          (
                            column as unknown as { headerClassName?: string}
                          )?.headerClassName
                        )
                      })}
                      onClick={() => handleSortChange(column.id)}
                      key={column.id}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="flex w-full px-6 py-3 text-left text-sm font-medium text-gray-500 capitalize tracking-wider hover:bg-gray-100">
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

            <div
              {...getTableBodyProps({ className: bodyClassName })}
            >
              {rows.length === 0 ? (
                Empty ? (
                  <Empty />
                ) : (
                  <DefaultEmpty />
                )
              ) : (
                rows.map(row => {
                  prepareRow(row);
                  return (
                    <div
                      {...row.getRowProps()}
                      key={row.id}
                      role="row"
                      className="border-b last:border-b-0 hover:bg-gray-100 group"
                    >
                      {row.cells.map((cell, index) => (
                        <div
                          {...cell.getCellProps({
                            className: classNames("px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate", 
                            (cell.column as unknown as { className?: string })
                            ?.className,
                            (cell.column as unknown as { cellClassName?: string })
                            ?.cellClassName
                            )
                          })}
                          key={index}
                        >
                          {cell.render('Cell')}
                        </div>
                      ))}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;

import React from 'react';

type Props = {
  start: number;
  end: number;
  total: number;
  currentPage: number;
  totalPage: number;
  onChangePage: (page: number) => void;
};

const Pagination = ({
  start,
  end,
  total,
  currentPage,
  totalPage,
  onChangePage,
}: Props) => {
  const maxLength = Math.log10(totalPage) + 1;

  return (
    <div className="block justify-between sm:flex sm:items-center">
      <div>
        Showing <strong>{start}</strong> ~ <strong>{end}</strong> of{' '}
        <strong>{total}</strong> results
      </div>

      <div className=" flex justify-between sm:space-x-2">
        <button
          className="btn"
          disabled={currentPage <= 1}
          onClick={event => {
            event.stopPropagation();
            onChangePage(currentPage - 1);
          }}
        >
          pref page
        </button>
        <form
          onSubmit={event => {
            const formData = new FormData(event.currentTarget);
            const nextPage = Number(formData.get('page'));

            onChangePage(nextPage);
            event.preventDefault();
          }}
        >
          <div className="relative w-28">
            <input
              type="text"
              name="page"
              defaultValue={currentPage}
              className="input-bordered input w-28  px-3 "
              maxLength={maxLength}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 " id="price-currency">
                / {totalPage}
              </span>
            </div>
          </div>

          <input type={'submit'} className="hidden" />
        </form>
        <button
          className="btn "
          disabled={currentPage >= totalPage}
          onClick={event => {
            event.stopPropagation();
            onChangePage(currentPage + 1);
          }}
        >
          next page
        </button>
      </div>
    </div>
  );
};

export default Pagination;

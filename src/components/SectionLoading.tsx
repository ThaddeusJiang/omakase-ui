import React from 'react';
import { LoadingIcon } from './LoadingIcon';

type Props = {
  message?: string;
};

/**
 * the parent component should be `relative` positioned
 * @param props
 * @returns
 */
export const SectionLoading = (props: Props) => {
  const { message } = props;

  return (
    <div className=" flex h-full w-full  items-center justify-center bg-white bg-opacity-90 ">
      <div>
        <p className="text-center">{message}</p>

        <span className="flex justify-center">
          <LoadingIcon />
        </span>
      </div>
    </div>
  );
};

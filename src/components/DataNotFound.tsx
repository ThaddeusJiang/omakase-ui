import React from 'react';

type Props = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

export const DataNotFound = (props: Props) => {
  const { title, description, children } = props;
  return (
    <div className="min-h-screen-sm hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md space-y-4">
          <h2 className="text-2xl font-medium">{title || 'Data not found'}</h2>
          {description ? <p>{description}</p> : null}
          {children ? <div>{children}</div> : null}
        </div>
      </div>
    </div>
  );
};

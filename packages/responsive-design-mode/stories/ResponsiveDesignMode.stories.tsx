import classNames from 'classnames';
import React from 'react';
import { useState } from 'react';

import ResponsiveDesignMode from '../src';

export const Standard = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setVisible(true)} className="btn btn-primary">
        Enter Responsive Design Mode
      </button>
      <ResponsiveDesignMode
        visible={visible}
        onClose={() => setVisible(false)}
        title="Responsive Design Mode"
      >
        {({ device }) => (
          <div className=" text-center ">
            <h1 className="my-8">
              The UI in <strong>{device}</strong>
            </h1>
            <div
              className={classNames(' mx-auto', {
                'grid grid-cols-3 gap-4': device === 'Desktop',
                'grid grid-cols-2 gap-4': device === 'Tablet',
                'grid grid-cols-1 gap-4': device === 'Mobile',
              })}
            >
              <div className="w-full bg-purple-400 btn-square btn"></div>
              <div className="w-full bg-purple-400 btn-square btn"></div>
              <div className="w-full bg-purple-400 btn-square btn"></div>
            </div>
          </div>
        )}
      </ResponsiveDesignMode>
    </div>
  );
};

export default {
  title: 'components/ResponsiveDesignMode',
};

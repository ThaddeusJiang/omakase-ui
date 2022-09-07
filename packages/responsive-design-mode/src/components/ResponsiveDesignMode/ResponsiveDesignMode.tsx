import { useState } from 'react';

import {
  DesktopComputerIcon,
  DeviceMobileIcon,
  DeviceTabletIcon,
  XIcon,
} from '@heroicons/react/outline';

import classNames from 'classnames';
import React from 'react';

type Device = 'Mobile' | 'Tablet' | 'Desktop';
interface Props {
  defaultDevice?: Device;
  visible: boolean;
  onClose: () => void;
  children: (props: { device: Device }) => React.ReactNode;
  title: string;
}

const ResponsiveDesignMode = ({
  visible,
  onClose,
  children,
  title,
  defaultDevice = 'Desktop',
}: Props) => {
  const [device, onDeviceChange] = useState<Device>(defaultDevice);
  if (!visible) {
    return <></>;
  }
  return (
    <main>
      <div className="bg-gray-800 absolute left-0 top-0 h-screen w-full" />
      <header className="fixed top-0 left-0 bg-white w-full h-16 grid grid-cols-3 items-center px-9 shadow-lg z-10 ">
        <h2 className="font-semibold text-gray-800">{title}</h2>
        <div className="justify-center flex gap-6 text-gray-450">
          <button
            onClick={() => onDeviceChange('Desktop')}
            className={classNames('p-2 hover:bg-slate-100', {
              'bg-slate-100 text-primary': device === 'Desktop',
            })}
            aria-label="desktop-device"
          >
            <DesktopComputerIcon className="w-4 h-6" />
          </button>
          <button
            onClick={() => onDeviceChange('Tablet')}
            className={classNames('p-2 hover:bg-slate-100', {
              'bg-slate-100 text-primary': device === 'Tablet',
            })}
            aria-label="tablet-device"
          >
            <DeviceTabletIcon className="w-4 h-6" />
          </button>
          <button
            onClick={() => onDeviceChange('Mobile')}
            className={classNames('p-2 hover:bg-slate-100', {
              'bg-slate-100 text-primary': device === 'Mobile',
            })}
            aria-label="mobile-device"
          >
            <DeviceMobileIcon className="w-4 h-6" />
          </button>
        </div>
        <button
          onClick={() => onClose()}
          className={'text-gray-450 hover:text-primary'}
          aria-label="close"
        >
          <XIcon className="h-4 w-4 ml-auto" />
        </button>
      </header>
      <section className={'h-[calc(100vh-60px)] absolute top-16 left-0 w-full'}>
        <div
          className={classNames(
            'mx-auto bg-white w-full h-full overflow-y-auto px-4',
            {
              'max-w-screen-md': device === 'Tablet',
              'max-w-md': device === 'Mobile',
            }
          )}
        >
          {children({ device })}
        </div>
      </section>
    </main>
  );
};

export default ResponsiveDesignMode;

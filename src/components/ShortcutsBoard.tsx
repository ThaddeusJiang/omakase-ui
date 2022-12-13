import React from 'react';

export const ShortcutsBoard = ({
  title,
  items,
}: {
  title: string;
  items: { description: string; keys: string[] }[];
}) => {
  return (
    <div className=" max-w-screen-md rounded border">
      <p className=" bg-slate-100 px-2 py-1 font-bold">{title}</p>
      <dl>
        {items.map(item => (
          <div className="flex justify-between border-t px-2 py-1">
            <dt>{item.description}</dt>
            <dd className="space-x-1">
              {item.keys.map(shortcut => (
                <kbd className="kbd kbd-sm">{shortcut}</kbd>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

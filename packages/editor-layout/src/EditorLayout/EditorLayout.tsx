import React, { FC, useState } from 'react';
import SplitPane from 'react-split-pane';

import './EditorLayout.css';

type EditorLayoutProps = {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
  mainComponent: React.ReactNode;
  bottomComponent: React.ReactNode;
};

export const EditorLayout: FC<EditorLayoutProps> = ({
  leftComponent,
  rightComponent,
  mainComponent,
  bottomComponent,
}) => {
  const [leftWidth, setLeftWidth] = useState(280);
  const [leftIsOpen, setLeftIsOpen] = useState(true);
  const toggleLeft = () => {
    setLeftIsOpen(!leftIsOpen);
  };

  const [topHeight, setTopHeight] = useState(480);
  const [topIsFull, setTopIsFull] = useState(false);
  const toggleMain = () => {
    setTopIsFull(!topIsFull);
  };

  const [mainWidth, setMainWidth] = useState(800);
  const [rightIsOpen, setRightIsOpen] = useState(true);
  const toggleRight = () => {
    setRightIsOpen(!rightIsOpen);
  };

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <button onClick={toggleLeft} className=" px-4 py-2 rounded border">
          left
        </button>
        <button onClick={toggleMain} className=" px-4 py-2 rounded border">
          bottom
        </button>
        <button onClick={toggleRight} className=" px-4 py-2 rounded border">
          left
        </button>
      </div>
      {/* @ts-ignore */}
      <SplitPane
        split="vertical"
        size={leftIsOpen ? leftWidth : 0}
        onChange={setLeftWidth}
      >
        {leftComponent}
        {/* @ts-ignore */}
        <SplitPane
          split="vertical"
          size={rightIsOpen ? mainWidth : screen.width - leftWidth}
          onChange={setMainWidth}
        >
          <div>
            {/* @ts-ignore */}
            <SplitPane
              split="horizontal"
              size={topIsFull ? '100%' : topHeight}
              onChange={setTopHeight}
            >
              {mainComponent}
              {bottomComponent}
            </SplitPane>
          </div>
          {rightComponent}
        </SplitPane>
      </SplitPane>
    </div>
  );
};

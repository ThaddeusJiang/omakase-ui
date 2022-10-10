import classNames from "classnames";
import React from "react";
import { useState } from "react";

import { ResponsiveDesignMode } from "@omakase-ui/responsive-design-mode";

const Page = () => {
  const [visible, setVisible] = useState(true);
  return (
    <main className="">
      <div className=" flex h-40 w-screen items-center justify-center">
        <button
          onClick={() => setVisible(true)}
          className=" block rounded border px-4 py-2 hover:bg-purple-600 hover:text-white"
        >
          Enter Responsive Design Mode
        </button>
      </div>

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
              className={classNames(" mx-auto", {
                "grid grid-cols-3 gap-4": device === "Desktop",
                "grid grid-cols-2 gap-4": device === "Tablet",
                "grid grid-cols-1 gap-4": device === "Mobile",
              })}
            >
              <div className="btn-square btn w-full bg-purple-400"></div>
              <div className="btn-square btn w-full bg-purple-400"></div>
              <div className="btn-square btn w-full bg-purple-400"></div>
            </div>
          </div>
        )}
      </ResponsiveDesignMode>
    </main>
  );
};

export default Page;

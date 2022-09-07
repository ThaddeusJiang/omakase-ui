import classNames from "classnames";
import React from "react";
import { useState } from "react";

import ResponsiveDesignMode from "@omakase-ui/responsive-design-mode";
import Link from "next/link";

const Standard = () => {
  const [visible, setVisible] = useState(true);
  return (
    <main className="">
      <Link href={"/"}>
        <a className=" underline   hover:text-blue-600 block">Home Page</a>
      </Link>
      <div className=" w-screen h-40 flex justify-center items-center">
        <button
          onClick={() => setVisible(true)}
          className=" border px-4 py-2 hover:bg-purple-600 rounded hover:text-white block"
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
              <div className="w-full bg-purple-400 btn-square btn"></div>
              <div className="w-full bg-purple-400 btn-square btn"></div>
              <div className="w-full bg-purple-400 btn-square btn"></div>
            </div>
          </div>
        )}
      </ResponsiveDesignMode>
    </main>
  );
};

export default Standard;

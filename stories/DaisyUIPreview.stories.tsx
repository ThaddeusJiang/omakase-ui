import React from 'react';
import { CSSProperties } from 'react';

export default {
  title: 'DaisyUI',
};

export const Preview = () => {
  return (
    <main className=" main-container mx-auto flex flex-col gap-4">
      <section className="grid grid-cols-4 gap-2 uppercase">
        <button className="btn">Default</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-info">INFO</button>
        <button className="btn btn-success">SUCCESS</button>
        <button className="btn btn-warning">WARNING</button>
        <button className="btn btn-error">ERROR</button>
      </section>
      <section className="grid grid-cols-4 items-center justify-items-center gap-2 uppercase">
        <div className="badge">Default</div>
        <div className="badge badge-primary">Primary</div>
        <div className="badge badge-secondary">Secondary</div>
        <div className="badge badge-accent">Accent</div>
        <div className="badge badge-info">INFO</div>
        <div className="badge badge-success">SUCCESS</div>
        <div className="badge badge-warning">WARNING</div>
        <div className="badge badge-error">ERROR</div>
      </section>
      <section className="grid grid-cols-2">
        <div>
          <div className="tabs">
            <a className="tab tab-lifted" href="/">
              Tab
            </a>
            <a className="tab tab-active tab-lifted" href="/">
              Tab
            </a>
            <a className="tab tab-lifted" href="/">
              Tab
            </a>
          </div>
          <div className="flex flex-col">
            <a className="link" href="/">
              I'm a simple link
            </a>
            <a className="link link-primary" href="/">
              I'm a simple link
            </a>
            <a className="link link-secondary" href="/">
              I'm a simple link
            </a>
            <a className="link link-accent" href="/">
              I'm a simple link
            </a>
          </div>
        </div>
        <div>
          <progress className="progress" value="5" max="100" />
          <progress className="progress progress-primary" value="10" max="100" />
          <progress className="progress progress-secondary" value="20" max="100" />
          <progress className="progress progress-accent" value="30" max="100" />
          <progress className="progress progress-info" value="40" max="100" />
          <progress className="progress progress-success" value="50" max="100" />
          <progress className="progress progress-warning" value="60" max="100" />
          <progress className="progress progress-error" value="70" max="100" />
        </div>
      </section>
      <section className="grid grid-cols-2 gap-4">
        <div className="stats shadow">
          <div className="stat ">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div>
          <div className="radial-progress" style={{ '--value': '60' } as CSSProperties}>
            60%
          </div>
          <div className="radial-progress text-primary" style={{ '--value': '75' } as CSSProperties}>
            75%
          </div>
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ '--value': '90' } as CSSProperties}
          >
            90%
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input type="checkbox" checked className="toggle" />
            <input type="checkbox" checked className="toggle toggle-primary" />
            <input type="checkbox" checked className="toggle toggle-secondary" />
            <input type="checkbox" checked className="toggle toggle-accent" />
          </div>
          <div className="flex gap-2">
            <input type="checkbox" checked className="checkbox" />
            <input type="checkbox" checked className="checkbox checkbox-primary" />
            <input type="checkbox" checked className="checkbox checkbox-secondary" />
            <input type="checkbox" checked className="checkbox checkbox-accent" />
          </div>
          <div className="flex gap-2">
            <input type="radio" checked className="radio" />
            <input type="radio" checked className="radio radio-primary" />
            <input type="radio" checked className="radio radio-secondary" />
            <input type="radio" checked className="radio radio-accent" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <input type="range" value="100" max="100" className="range range-xs" />
          <input type="range" value="80" max="100" className="range range-primary range-xs" />
          <input type="range" value="60" max="100" className="range range-secondary range-xs" />
          <input type="range" value="40" max="100" className="range range-accent range-xs" />
        </div>
      </section>
      <section className="grid grid-cols-2 gap-4">
        <input className="input input-bordered" type="text" placeholder="Default" />
        <input className="input input-bordered input-info" type="text" placeholder="Info" />
        <input className="input input-bordered input-primary" type="text" placeholder="Primary" />
        <input className="input input-bordered input-success" type="text" placeholder="Success" />
        <input className="input input-bordered input-secondary" type="text" placeholder="Secondary" />
        <input className="input input-bordered input-warning" type="text" placeholder="Warning" />
        <input className="input input-bordered input-accent" type="text" placeholder="Accent" />
        <input className="input input-bordered input-error" type="text" placeholder="Error" />
      </section>
      <section>
        <div className="navbar bg-gray-300 p-4">
          <div className="flex-none">
            <button className="btn btn-ghost btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost text-xl normal-case" href="/">
              daisyUI
            </a>
          </div>
          <div className="flex-none">
            <button className="btn btn-ghost btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="text-4xl font-bold">Text Size 1</div>
          <div className="text-3xl font-bold">Text Size 2</div>
          <div className="text-2xl font-bold">Text Size 3</div>
          <div className="text-xl font-bold">Text Size 4</div>
          <div className="text-lg font-bold">Text Size 5</div>
          <div className="text-sm font-bold">Text Size 6</div>
          <div className="text-xs font-bold">Text Size 7</div>
        </div>
        <div>
          <ul className="steps steps-vertical">
            <li className="step step-primary">Step 1</li>
            <li className="step step-primary">Step 2</li>
            <li className="step">Step 3</li>
            <li className="step">Step 4</li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <div className="alert shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 flex-shrink-0 stroke-info"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>12 unread messages. Tap to see.</span>
          </div>
        </div>
        <div className="alert alert-info shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 flex-shrink-0 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>New software update available.</span>
          </div>
        </div>
        <div className="alert alert-warning shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Warning: Invalid email address!</span>
          </div>
        </div>
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Task failed successfully.</span>
          </div>
        </div>
      </section>
    </main>
  );
};

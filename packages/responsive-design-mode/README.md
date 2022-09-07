<h1 align="center">@omakase-ui/responsive-design-mode 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@omakase-ui/responsive-design-mode" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@omakase-ui/responsive-design-mode.svg">
  </a>
  <a href="https://github.com/ThaddeusJiang/omakase-ui/tree/main/packages/responsive-design-mode#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/ThaddeusJiang/omakase-ui/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/ThaddeusJiang/omakase-ui/blob/main/packages/responsive-design-mode/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/ThaddeusJiang/omakase-ui" />
  </a>
  <a href="https://twitter.com/ThaddeusJiang" target="_blank">
    <img alt="Twitter: ThaddeusJiang" src="https://img.shields.io/twitter/follow/ThaddeusJiang.svg?style=social" />
  </a>
</p>

### 🏠 [Homepage](https://github.com/ThaddeusJiang/omakase-ui/tree/main/packages/responsive-design-mode#readme)

## Features

- [x] Responsive Design Mode for PC, Tablet and Mobile

## Install

```sh
yarn add @omakase-ui/responsive-design-mode
```

## Usage

```jsx
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
```



## Development
### Storybook

```bash
yarn storybook
```

### Run tests

```sh
yarn test
```

## Author

👤 **Thaddeus Jiang**

* Website: https://thaddeusjiang.com/
* Twitter: [@ThaddeusJiang](https://twitter.com/ThaddeusJiang)
* Github: [@ThaddeusJiang](https://github.com/ThaddeusJiang)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ThaddeusJiang/omakase-ui/packages/responsive-design-mode/issues). You can also take a look at the [contributing guide](https://github.com/ThaddeusJiang/omakase-ui/packages/responsive-design-mode/blob/main/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Thaddeus Jiang](https://github.com/ThaddeusJiang).<br />
This project is [MIT](https://github.com/ThaddeusJiang/omakase-ui/blob/main/packages/responsive-design-mode/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
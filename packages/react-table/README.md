# @omakase-ui/react-table

React table component of Omakase UI.

[![npm (scoped)](https://img.shields.io/npm/v/@omakase-ui/react-table?style=for-the-badge)](https://www.npmjs.com/package/@omakase-ui/react-table)

## features

- [x] out of box react table component with beautiful style.
- [x] resize column size of table.

## Install

```bash
yarn add @omakase-ui/react-table
```

## Usage

```ts
import { DataTable } from '@omakase-ui/react-table';

import '@omakase-ui/react-table/dist/react-table.css';

// render
<DataTable columns={columns} data={data} sort={['name', 'asc']} />;
```

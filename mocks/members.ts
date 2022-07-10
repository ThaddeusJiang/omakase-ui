export const MockMembers = [
  {
    id: 1,
    name: "John Doe",
    kana: "ジョン・ドゥ",
    mail: "johndoe@me.com",
    phone: "+1 (123) 456-7891",
    address: "001 Main St, Anywhere, USA",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Doe",
    kana: "ジェーン・ドゥ",
    mail: "janedoe@me.com",
    phone: "+1 (123) 456-7892",
    address: "002 Main St, Anywhere, USA",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
];

export const MockReactTableColumns = [
  {
    Header: "name",
    accessor: "name",
    width: 300,
  },
  {
    Header: "kana",
    accessor: "kana",
  },
  {
    Header: "mail",
    accessor: "mail",
  },
  {
    Header: "phone",
    accessor: "phone",
  },
  {
    Header: "address",
    accessor: "address",
  },
];

export const MockColumns = [
  {
    id: "1",
    name: "Name",
    key: "name",
  },
  {
    id: "2",
    name: "Kana",
    key: "kana",
  },
  {
    id: "3",
    name: "Mail",
    key: "mail",
  },
  {
    id: "4",
    name: "Phone",
    key: "phone",
  },
  {
    id: "5",
    name: "Address",
    key: "address",
  },
];

export const MockViews = [
  {
    id: "1",
    name: "View 1",
    columns: MockColumns.slice(0, 3),
  },
  {
    id: "2",
    name: "View 2",
    columns: [],
  },
];

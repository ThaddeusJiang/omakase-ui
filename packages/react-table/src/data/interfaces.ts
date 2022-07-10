export interface Member {
  id: number;
  name: string;
  kana: string;
  mail: string;
  phone: string;
  address: string;
  avatar: string;
}

export interface TableColumn {
  id: string;
  name: string;
}

export interface View {
  id: string;
  name: string;
  columns: TableColumn[];
}

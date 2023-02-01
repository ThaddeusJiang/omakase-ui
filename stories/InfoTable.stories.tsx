import React from 'react';
import { InfoTable } from '../src';
export default { title: 'InfoTable' };

const MockBasicInfoItems = [
  {
    id: '氏名',
    name: '氏名',
    content: '山田太郎',
  },
  {
    id: 'フリガナ',
    name: 'フリガナ',
    content: 'ヤマダタロウ',
  },
  {
    id: '性別',
    name: '性別',
    content: '男',
  },
  {
    id: '生年月日',
    name: '生年月日',
    content: '1990年1月1日',
  },
  {
    id: '電話番号',
    name: '電話番号',
    content: '090-1234-5678',
  },
  {
    id: '郵便番号',
    name: '郵便番号',
    content: '123-4567',
  },
  {
    id: '都道府県',
    name: '都道府県',
    content: '東京都',
  },
  {
    id: '市区町村',
    name: '市区町村',
    content: '港区',
  },
  {
    id: '住所1',
    name: '住所1',
    content: '港区',
  },
  {
    id: '住所1フリガナ',
    name: '住所1フリガナ',
    content: 'ミナトク',
  },
  {
    id: '住所2',
    name: '住所2',
    content: '赤坂1-1-1',
  },
  {
    id: '住所2フリガナ',
    name: '住所2フリガナ',
    content: 'アカサカ1-1-1',
  },
  {
    id: 'マイナンバー',
    name: 'マイナンバー',
    content: '1234567890123',
  },
];

export const BasicInfo = () => <InfoTable items={MockBasicInfoItems} />;

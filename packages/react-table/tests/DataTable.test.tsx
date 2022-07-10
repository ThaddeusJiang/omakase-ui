import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import { MockMembers, MockReactTableColumns } from '../src/data/mocks';
import { DataTable } from '../src';

describe('components/DataTable', () => {
  test('should render 2 rows and 5 columns', () => {
    render(<DataTable columns={MockReactTableColumns} data={MockMembers} />);

    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('kana')).toBeInTheDocument();
    expect(screen.getByText('mail')).toBeInTheDocument();
    expect(screen.getByText('phone')).toBeInTheDocument();
    expect(screen.getByText('address')).toBeInTheDocument();

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe@me.com')).toBeInTheDocument();
    expect(screen.getByText('+1 (123) 456-7891')).toBeInTheDocument();
    expect(screen.getByText('001 Main St, Anywhere, USA')).toBeInTheDocument();

    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });
  test.skip('should change sort', () => {
    const onSortChange = jest.fn();

    render(
      <DataTable
        columns={MockReactTableColumns}
        data={MockMembers}
        onSortChange={onSortChange}
      />
    );

    const mailHeader = screen.getByText('mail');
    expect(mailHeader).toBeInTheDocument();
    act(() => {
      userEvent.click(mailHeader);
    });
    expect(onSortChange).toBeCalledTimes(1);
  });
});

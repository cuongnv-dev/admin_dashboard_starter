import { CustomTable, Table, TableBody, TableContainer, TableHeader } from 'components/Layout';
import React from 'react';
import { ItemTableHeader } from './ItemTableHeader';

const list = [
  {
    goldCode: '00871972',
    barcode: '2605052',
    itemName: 'Bánh kẹp chà bông 110g - 05052',
    unit: 'Cái',
    price: 10000,
    quantity: 2,
    picked: 0,
    total: 20000,
    note: '',
  },
  {
    goldCode: '00871972',
    barcode: '2605052',
    itemName: 'Bánh kẹp chà bông 110g - 05052',
    unit: 'Cái',
    price: 10000,
    quantity: 2,
    picked: 0,
    total: 20000,
    note: '',
  },
  {
    goldCode: '00871972',
    barcode: '2605052',
    itemName: 'Bánh kẹp chà bông 110g - 05052',
    unit: 'Cái',
    price: 10000,
    quantity: 2,
    picked: 0,
    total: 20000,
    note: '',
  },
  {
    goldCode: '00871972',
    barcode: '2605052',
    itemName: 'Bánh kẹp chà bông 110g - 05052',
    unit: 'Cái',
    price: 10000,
    quantity: 2,
    picked: 0,
    total: 20000,
    note: '',
  },
  {
    goldCode: '00871972',
    barcode: '2605052',
    itemName: 'Bánh kẹp chà bông 110g - 05052',
    unit: 'Cái',
    price: 10000,
    quantity: 2,
    picked: 0,
    total: 20000,
    note: '',
  },
  {
    goldCode: '00871972',
    barcode: '2605052',
    itemName: 'Bánh kẹp chà bông 110g - 05052',
    unit: 'Cái',
    price: 10000,
    quantity: 2,
    picked: 0,
    total: 20000,
    note: '',
  },
  {
    goldCode: '00871972',
    barcode: '2605052',
    itemName: 'Bánh kẹp chà bông 110g - 05052',
    unit: 'Cái',
    price: 10000,
    quantity: 2,
    picked: 0,
    total: 20000,
    note: '',
  },
  {
    goldCode: '00871972',
    barcode: '2605052',
    itemName: 'Bánh kẹp chà bông 110g - 05052',
    unit: 'Cái',
    price: 10000,
    quantity: 2,
    picked: 0,
    total: 20000,
    note: '',
  },
  {
    goldCode: '00871972',
    barcode: '2605052',
    itemName: 'Bánh kẹp chà bông 110g - 05052',
    unit: 'Cái',
    price: 10000,
    quantity: 2,
    picked: 0,
    total: 20000,
    note: '',
  },
  {
    goldCode: '00871972',
    barcode: '2605052',
    itemName: 'Bánh kẹp chà bông 110g - 05052',
    unit: 'Cái',
    price: 10000,
    quantity: 2,
    picked: 0,
    total: 20000,
    note: '',
  },
];

export const ItemTable = () => {
  const renderBody = (item: any, index: number) => {
    return (
      <tr
        className={`text-xs h-10  ${
          index !== 0 ? 'border-t border-gray-200 dark:border-gray-700' : ''
        }  ${index % 2 === 0 ? 'bg-gray-50 dark:bg-black-lighter-2 dark:bg-opacity-50' : ''}`}
        key={index}
      >
        <td className="pr-3 pl-4">{item.goldCode}</td>
        <td className="pr-3">{item.barcode}</td>
        <td className="pr-3">{item.itemName}</td>
        <td className="pr-3">{item.unit}</td>
        <td className="pr-3">{item.price}</td>
        <td className="pr-3">{item.quantity}</td>
        <td className="pr-3">{item.picked}</td>
        <td className="pr-3">{item.total}</td>
        <td className="pr-3">{item.note}</td>
      </tr>
    );
  };

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <ItemTableHeader />
        </TableHeader>
        <TableBody>{list.map((item, index) => renderBody(item, index))}</TableBody>
      </Table>
    </TableContainer>
  );
};

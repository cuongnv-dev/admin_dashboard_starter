import React from 'react';

export const ItemTableHeader = () => {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-800 dark:text-white text-xs ">
      <th className="font-medium text-left pr-6 pl-4">Gold code</th>
      <th className="font-medium text-left pr-6">Barcode</th>
      <th className="font-medium text-left pr-12">Item name</th>
      <th className="font-medium text-left pr-6">Unit</th>
      <th className="font-medium text-left pr-6">Price</th>
      <th className="font-medium text-left pr-6">Quantity</th>
      <th className="font-medium text-left pr-6">Picked</th>
      <th className="font-medium text-left pr-6">Total</th>
      <th className="font-medium text-left pr-6">Note</th>
    </tr>
  );
};

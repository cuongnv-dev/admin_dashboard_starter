export const OrderTableHeader = () => {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-800 dark:text-white text-xs ">
      <th className="font-medium text-left pr-10 pl-4">Order code</th>
      <th className="font-medium text-left pr-10">Channel</th>
      <th className="font-medium text-left pr-12">Store</th>
      <th className="font-medium text-left pr-6">Customer name</th>
      <th className="font-medium text-left pr-6">Phone number</th>
      <th className="font-medium text-left pr-10">Time order</th>
      <th className="font-medium text-left pr-8">Delivery date</th>
      <th className="font-medium text-left pr-6">Delivery time</th>
      <th className="font-medium text-left pr-6">Status</th>
      <th className="font-medium text-left pr-6">Actions</th>
    </tr>
  );
};

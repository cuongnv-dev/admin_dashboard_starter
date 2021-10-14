import {
  CheckCircleIcon,
  ChevronLeftIcon,
  EyeIcon,
  PencilAltIcon,
  PrinterIcon,
  SaveIcon,
  TrashIcon,
} from '@heroicons/react/solid';
import { Button } from 'components/common';
import { PageContainer, PageTitle } from 'components/Layout';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ItemTable } from './components/ItemTable';
import {
  CardContend,
  CardHeader,
  CustomerCard,
  DetailLabel,
  DetailRow,
  OrderSummaryCard,
  SummaryRow,
} from './styles';

export const OrderDetails = () => {
  const { orderId } = useParams<{ orderId: string }>();
  return (
    <PageContainer>
      <div className="flex flex-row justify-between items-center">
        <PageTitle>
          Order Number <p className="text-red-600 ml-2">#{orderId}</p>
        </PageTitle>
        <div className="flex flex-row gap-3">
          <Button preset="outline-white">
            <Link to={'/oms'} className="flex flex-row">
              <ChevronLeftIcon className="w-4 h4  mx-auto" />
              <span className="text-xs ml-2 font-medium">Go back</span>
            </Link>
          </Button>

          <Button onClick={() => console.log('abc')}>
            <div className="flex flex-row">
              <PrinterIcon className="w-4 h4  mx-auto" />
              <span className="text-xs ml-2 font-medium">Print</span>
            </div>
          </Button>
          <Button onClick={() => console.log('abc')}>
            <div className="flex flex-row">
              <CheckCircleIcon className="w-4 h4  mx-auto" />
              <span className="text-xs ml-2 font-medium">Complete</span>
            </div>
          </Button>
          <Button onClick={() => console.log('abc')}>
            <div className="flex flex-row">
              <PencilAltIcon className="w-4 h4  mx-auto" />
              <span className="text-xs ml-2 font-medium">Edit</span>
            </div>
          </Button>
          <Button preset="danger" onClick={() => console.log('abc')}>
            <div className="flex flex-row">
              <TrashIcon className="w-4 h4  mx-auto" />
              <span className="text-xs ml-2 font-medium">Delete</span>
            </div>
          </Button>
        </div>
      </div>
      <SummaryRow>
        <OrderSummaryCard>
          <CardContend>
            <CardHeader>Order summary</CardHeader>
            <div className="flex flex-row flex-wrap">
              <DetailRow>
                <DetailLabel>Store</DetailLabel>
                <p>105 - Trường Chinh</p>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Channel</DetailLabel>
                <p>00115</p>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Created by</DetailLabel>
                <p>Zalo</p>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Cashier code</DetailLabel>
                <p>051, 052, 053, ...</p>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Order created</DetailLabel>
                <p>29-09-2021</p>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Order time</DetailLabel>
                <p>14:03</p>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Payment method</DetailLabel>
                <p>COD</p>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Delivery fee</DetailLabel>
                <p>0 VND</p>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Total</DetailLabel>
                <p className="font-semibold">114.500 VND</p>
              </DetailRow>
            </div>
          </CardContend>
        </OrderSummaryCard>
        <CustomerCard>
          <CardContend>
            <CardHeader>Customer and Delivery details</CardHeader>
            <div className="flex flex-row flex-wrap">
              <DetailRow>
                <DetailLabel>Customer name</DetailLabel>
                <p>Nguyen Viet Cuong</p>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Phone Number</DetailLabel>
                <p>0399518248</p>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Bigxu Card</DetailLabel>
                <p>0399518248</p>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Delivery date</DetailLabel>
                <p>29-09-2021</p>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Delivery time</DetailLabel>
                <p>10h-14h</p>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Note</DetailLabel>
                <p>N/A</p>
              </DetailRow>
              <div className="flex w-full py-1">
                <p className="font-semibold w-1/5">Address</p>
                <p className="text-right">
                  Cc 8x Plus, 163a Trường Chinh, P. Tân Thới Nhất, Q. 12, TP. Hồ Chí Minh
                </p>
              </div>
            </div>
          </CardContend>
        </CustomerCard>
      </SummaryRow>

      <CardContend className="mt-4 text-xs">
        <div className="flex justify-between border-b pb-3 border-gray-200 dark:border-gray-700 mb-3">
          <p className="font-semibold">Items summary</p>
          <div className="flex gap-8">
            <p className="font-medium">Total quantity: 14</p>
            <p className="font-medium">Total picked: 14</p>
            <p className="font-medium">Total amount: 140.000 VND</p>
          </div>
        </div>
        <ItemTable />
      </CardContend>
    </PageContainer>
  );
};

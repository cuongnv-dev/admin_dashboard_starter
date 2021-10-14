import styled from 'styled-components';
import tw from 'twin.macro';

export const SummaryRow = styled.div`
  ${tw`w-full flex flex-row flex-wrap mt-4 text-xs`}
`;

export const OrderSummaryCard = styled.div`
  ${tw`w-full object-contain mt-4 md:mt-0 md:w-1/2 md:pr-1`}
`;

export const CustomerCard = styled.div`
  ${tw`w-full object-contain md:w-1/2 md:pl-2 xl:pr-2`}
`;

export const CardContend = styled.div`
  ${tw`h-full border border-gray-200 dark:border-gray-700 rounded-lg bg-white rounded-lg shadow-sm p-4 px-6 dark:bg-black-lighter`}
`;
export const CardHeader = styled.p`
  ${tw`font-semibold dark:text-white border-b pb-3 border-gray-200 dark:border-gray-700 mb-3`}
`;

export const DetailRow = styled.div`
  ${tw`flex w-1/2  py-1`}
`;

export const DetailLabel = styled.p`
  ${tw`font-semibold w-2/5`}
`;

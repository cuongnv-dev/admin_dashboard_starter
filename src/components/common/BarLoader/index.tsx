import { css } from '@emotion/react';
import BarLoader from 'react-spinners/BarLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: '#10b981';
`;
interface CustomBarLoaderProps {
  loading: boolean;
  width: any;
  height?: number;
}
export const CustomBarLoader = ({ loading, width, height = 4 }: CustomBarLoaderProps) => {
  return (
    <BarLoader
      color={'#10b981'}
      loading={loading}
      css={override}
      height={height}
      width={width}
      speedMultiplier={0.2}
    />
  );
};

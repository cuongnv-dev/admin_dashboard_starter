import { css } from '@emotion/react';
import { BeatLoader, BarLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

interface SpinnerProps {
  loading: boolean;
  size?: number;
  color?: string;
  type?: 'beat' | 'bounce' | 'circle' | 'clip';
}

export const Spinner = ({ loading, size = 10, type, color = 'green' }: SpinnerProps) => {
  return <BeatLoader loading={loading} css={override} color={color} size={size} />;
};

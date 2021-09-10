import { ButtonProps } from './button.props';
import styled from 'styled-components';
import tw from 'twin.macro';
import { t } from 'i18n/translation';
import { Link } from 'react-router-dom';
import { Spinner } from '../Spinner';

const BaseButton = styled.button`
  ${tw`
    flex
    flex-row
    justify-center
    items-center
    h-10
    px-4
    outline-none
    bg-green-500
    rounded-md
    text-xs
    font-semibold
    transition-all
    duration-200
    ease-in-out
  `}
`;

const PrimaryButton = styled(BaseButton)`
  ${tw`
    bg-green-500
    hover:bg-green-600
    text-white
    hover:shadow
    disabled:opacity-50
  `}
`;

const OutlineButton = styled(BaseButton)`
  ${tw`
    bg-transparent
    hover:shadow
    text-gray-700
    dark:text-gray-200
    border
    border-gray-200
    dark:border-gray-700
    dark:hover:bg-gray-700
  `}
`;

export const Button = ({
  children,
  onClick,
  label,
  preset,
  txLabel,
  loading,
  route = '/',
}: ButtonProps) => {
  const i18nText = txLabel && t(txLabel);
  const text = i18nText || label;
  const child = children || text;
  if (preset === 'outline')
    return (
      <OutlineButton disabled={loading} onClick={onClick}>
        <div className="flex flex-row">{child}</div>
      </OutlineButton>
    );

  if (preset === 'link') {
    return (
      <PrimaryButton>
        <div className="flex flex-row">
          {child}
          {loading && <Spinner loading={true} />}
        </div>
      </PrimaryButton>
    );
  }

  return (
    <PrimaryButton disabled={loading} onClick={onClick}>
      <div className="flex flex-row items-center">
        {child}
        {loading && (
          <div className="ml-2">
            <Spinner loading={true} size={6} color="white" />
          </div>
        )}
      </div>
    </PrimaryButton>
  );
};

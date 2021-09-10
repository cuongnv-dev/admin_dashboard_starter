import { TxKeyPath } from 'i18n/i18n';
import { t } from 'i18n/translation';
import styled from 'styled-components';
import tw from 'twin.macro';

interface BadgeProps {
  preset?: 'success' | 'warning' | 'danger';
  label?: string;
  txLabel?: TxKeyPath;
}

const BaseBadge = styled.span`
  ${tw`text-xs rounded-lg px-2 py-1`};
` as any;

const SuccessBadge = styled(BaseBadge)`
  ${tw`text-green-600 bg-green-100 dark:bg-green-600 dark:bg-opacity-40 dark:text-green-700`}
`;

const DnagerBadge = styled(BaseBadge)`
  ${tw`text-red-600 bg-red-100 dark:bg-red-500 dark:bg-opacity-40 dark:text-white`}
`;

export const Badge = ({ preset, label, txLabel }: BadgeProps) => {
  const i18nText = txLabel && t(txLabel);
  const labeltext = i18nText ? i18nText : label;
  if (preset === 'success') {
    return (
      <SuccessBadge>
        <span className="text-green-600 dark:text-green-300 font-normal dark:font-medium">
          {labeltext}
        </span>
      </SuccessBadge>
    );
  }
  return (
    <DnagerBadge>
      <span className="text-red-600 dark:text-red-200 font-normal dark:font-medium">
        {labeltext}
      </span>
    </DnagerBadge>
  );
};

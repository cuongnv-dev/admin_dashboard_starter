import { TxKeyPath } from 'i18n/i18n';
import { t } from 'i18n/translation';
import styled from 'styled-components';
import tw from 'twin.macro';

interface BadgeProps {
  preset?: 'success' | 'warning' | 'danger' | 'info';
  label?: string;
  txLabel?: TxKeyPath;
}

const BaseBadge = styled.span`
  ${tw`text-xs rounded-lg px-2 py-1 font-normal dark:font-medium`};
` as any;

const SuccessBadge = styled(BaseBadge)`
  ${tw`text-green-600 dark:text-green-300 bg-green-100 dark:bg-green-600 dark:bg-opacity-40`}
`;

const DangerBadge = styled(BaseBadge)`
  ${tw`text-red-600 dark:text-red-200 bg-red-100 dark:bg-red-500 dark:bg-opacity-40 `}
`;

const WarningBadge = styled(BaseBadge)`
  ${tw`text-yellow-600 dark:text-yellow-200 bg-yellow-200 dark:bg-yellow-500 dark:bg-opacity-40`}
`;

const InfoBadge = styled(BaseBadge)`
  ${tw`text-blue-600 dark:text-blue-200 bg-blue-100 dark:bg-blue-600 dark:bg-opacity-40`}
`;

export const Badge = ({ preset, label, txLabel }: BadgeProps) => {
  const i18nText = txLabel && t(txLabel);
  const labelText = i18nText ? i18nText : label;
  switch (preset) {
    case 'success':
      return (
        <SuccessBadge>
          {/* <span className="text-green-600 dark:text-green-300 font-normal dark:font-medium"> */}
          {labelText}
          {/* </span> */}
        </SuccessBadge>
      );
    case 'danger':
      return <DangerBadge>{labelText}</DangerBadge>;
    case 'info':
      return <InfoBadge>{labelText}</InfoBadge>;
    case 'warning':
      return <WarningBadge>{labelText}</WarningBadge>;
    default:
      return <SuccessBadge>{labelText}</SuccessBadge>;
  }
};

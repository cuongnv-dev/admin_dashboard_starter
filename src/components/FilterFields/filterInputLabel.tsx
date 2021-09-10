import styled from 'styled-components';
import tw from 'twin.macro';

const Label = styled.label`
  ${tw`
    flex
    flex-row
  `}
`;

const LabelText = styled.p`
  ${tw`
    font-semibold 
    mr-1
  `}
`;

interface FilterInputLabelProps {
  type?: 'filter' | 'search';
  text?: string;
  id: string;
}

export const FilterInputLabel = ({ type, text, id }: FilterInputLabelProps) => {
  const labelType = type ? 'Filter' : type === 'search' ? 'Search' : 'Filter';
  return (
    <Label htmlFor={id}>
      <LabelText> {labelType}</LabelText> {text}
    </Label>
  );
};
